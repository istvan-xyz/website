# Adding SSH tunneling to a script

SSH tunnelling is a very useful technique to connect to services that we don't want to expose to the internet, however it can be tedious to manually set up the SSH tunnels and clean them up, luckily it is possible to set up a tunnel in the beginning of our script and close it at the end.

In our example, we will try to connect to a remote database that we can reach through a host that we can SSH into.

We will first store our host in a variable called `SSH_TUNNEL`, our database hostname is going to be stored in the `PGHOST` variable.

```sh
SSH_TUNNEL=username@host
PGHOST=postgres.dev
```

In the next step we want to setup an SSH tunnel and put it into the background so that the rest of our script can be allowed to run. According to [people on Stack Overflow](https://superuser.com/questions/1313738/how-to-run-a-tunnel-in-the-background-as-part-of-a-shell-script), the correct way to run the `ssh` command is the background is with the `-f` flag.

```sh
ssh -o ExitOnForwardFailure=yes -f -4 -N -L 5433:$PGHOST:5432 "$SSH_TUNNEL"
```

This works as expected, however we don't know the PID of this process and grepping is not a reliable solution, [yet another Stack Overflow question has the solution](https://unix.stackexchange.com/questions/389014/getting-a-pid-for-an-ssh-process-that-backgrounded-itself).

We can run our `ssh` process in a mode that allows it to be controlled through a socket, which we can later use to terminate it.

In this example we use `/tmp/postgres-ssh-tunnel` as our socket path.

```sh
ssh -o ExitOnForwardFailure=yes -o ControlMaster=auto -S /tmp/postgres-ssh-tunnel -f -4 -N -L 5433:$PGHOST:5432 "$SSH_TUNNEL"
```

Once this is set up, we can ask our SSH process to terminate with the following command:

```sh
ssh -S /tmp/postgres-ssh-tunnel -O exit "$SSH_TUNNEL"
```

Our script will look like this:

```sh
ssh -o ExitOnForwardFailure=yes -o ControlMaster=auto -S /tmp/postgres-ssh-tunnel -f -4 -N -L 5433:$PGHOST:5432 "$SSH_TUNNEL"

# Now we can connect through localhost
pg_dump \
    --format=c \
    --host=localhost \
    --port=5433 \
    --dbname=postgres \
    --username=postgres \
    --file="db.dump"

ssh -S /tmp/postgres-ssh-tunnel -O exit "$SSH_TUNNEL"
```

References:

https://www.cyberciti.biz/faq/linux-unix-reuse-openssh-connection/

https://superuser.com/questions/1313738/how-to-run-a-tunnel-in-the-background-as-part-of-a-shell-script

https://unix.stackexchange.com/questions/389014/getting-a-pid-for-an-ssh-process-that-backgrounded-itself
