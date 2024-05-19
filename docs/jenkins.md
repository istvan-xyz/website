# Jenkins

Jenkins is widely regarded as the most flexible and powerful Continuous Integration system in the industry. Its open-source nature means it is free to use, making it hard to beat in terms of cost-effectiveness. Despite being an older tool, Jenkins remains highly relevant due to its extensive plugin ecosystem and robust community support. While newer CI/CD tools have emerged, none have yet matched Jenkins' comprehensive feature set and adaptability.

## Setup

I prefer to set up Jenkins in a containerized environment, giving it access to Docker. This setup allows builds to leverage the full container ecosystem, facilitating consistent and isolated build environments, improving scalability, and simplifying dependency management.

This guide will assume you have Docker installed.

`docker-compose.yml`

```yaml
services:
  jenkins:
    image: istvan32/jenkins:latest
    volumes:
      - jenkins_home:/var/jenkins_home
      - jenkins_workspaces:/var/jenkins_workspaces
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - 8081:8080
    restart: always
    environment:
      - JAVA_OPTS=-Dhudson.model.DirectoryBrowserSupport.CSP= -Dorg.jenkinsci.plugins.durabletask.BourneShellScript.HEARTBEAT_CHECK_INTERVAL=8640 -Dorg.jenkinsci.plugins.durabletask.BourneShellScript.LAUNCH_DIAGNOSTICS=true
    user: "0:0"
    privileged: true
    ipc: host
    shm_size: 64M

volumes:
  jenkins_home:
  jenkins_workspaces:
```

*Notes*

The main difference between my image and the official image is that my version also includes Docker.

The Jenkins Home folder could be a bind mount instead of a volume, I picked volume, because it can be significantly faster in some situations.

Once you have written the `docker-compose.yml` file, you can run:

```sh
docker compose up -d
```

Once it's running, you can consult the Jenkins handbook to configure the appropriate reverse proxy: https://www.jenkins.io/doc/book/system-administration/reverse-proxy-configuration-with-jenkins/index.html

During setup you can acquire the initial admin password with the following command:

```sh
docker exec jenkins-jenkins-1 cat /var/jenkins_home/secrets/initialAdminPassword
```

During installation I usually pick the install suggested plugins, if something is not needed it can be removed later.

Optional: you can enable dark mode under Manage Jenkins -> Appearance.

Install the [Docker Pipeline](https://docs.cloudbees.com/docs/cloudbees-ci/latest/pipelines/docker-workflow) plugin.

I also recommend installing [HTML Publisher](https://plugins.jenkins.io/htmlpublisher/), (https://plugins.jenkins.io/pipeline-stage-view/) and [CCtray XML](https://plugins.jenkins.io/cctray-xml).

You should be able to build inside containers, even build containers from within those containers.

```groovy
node {
    docker.image('nodejs').inside('-v /var/run/docker.sock:/var/run/docker.sock') {
        // your build
    }
}
```