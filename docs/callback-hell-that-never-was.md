<h2>The callback hell that never was</h2>
<p>Let's talk about callbacks, people seem to get terrified by them, because they see something like this:</p>
<pre><code>var mysql = require('mysql'),<br />
&nbsp; &nbsp; db = mysql.createClient({<br />
&nbsp; &nbsp; &nbsp; &nbsp; user: 'root',<br />
&nbsp; &nbsp; &nbsp; &nbsp; password: 'root'<br />
&nbsp; &nbsp; }),<br />
&nbsp; &nbsp; id = 1;<br />
<br />
db.query('USE mydb', function (err) {<br />
&nbsp; &nbsp; //some code here<br />
&nbsp; &nbsp; db.query('SELECT * FROM whatever WHERE id=?', [id], function (err, foo) {<br />
&nbsp; &nbsp; &nbsp; &nbsp; if (foo) {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //some other code<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; db.query('UPDATE whatever SET bar=?', [foo.bar], function (err) {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; db.query('INSERT INTO someothertable (sometime) VALUES (NOW())', function () {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //some code<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log(&quot;It's done&quot;);<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });<br />
&nbsp; &nbsp; &nbsp; &nbsp; }<br />
&nbsp; &nbsp; });<br />
&nbsp; &nbsp; //more code<br />
});</code></pre>
<p>
    This has the potential to turn into hard to understand spaghetti code. But we don't have to write it like this, we
    don't have to inline every function we can simply name them instead.
</p>
<pre><code>var mysql = require('mysql'),<br />
&nbsp; &nbsp; db = mysql.createClient({<br />
&nbsp; &nbsp; &nbsp; &nbsp; user: 'root',<br />
&nbsp; &nbsp; &nbsp; &nbsp; password: 'root'<br />
&nbsp; &nbsp; }),<br />
&nbsp; &nbsp; id = 1;<br />
<br />
function init(fn) {<br />
&nbsp; &nbsp; db.query('USE mydb', fn);<br />
}<br />
<br />
function fetch(id, fn) {<br />
&nbsp; &nbsp; db.query('SELECT * FROM whatever WHERE id=?', [id], fn);<br />
}<br />
<br />
function checker(err, foo) {<br />
&nbsp; &nbsp; if (foo) {<br />
&nbsp; &nbsp; &nbsp; &nbsp; //some other code<br />
&nbsp; &nbsp; &nbsp; &nbsp; update(foo.bar);<br />
&nbsp; &nbsp; }<br />
}<br />
<br />
function update(bar) {<br />
&nbsp; &nbsp; db.query('UPDATE whatever SET bar=?', [bar], function (err) {<br />
&nbsp; &nbsp; &nbsp; &nbsp; db.query('INSERT INTO someothertable (sometime) VALUES (NOW())', function () {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //some code<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log(&quot;It's done&quot;);<br />
&nbsp; &nbsp; &nbsp; &nbsp; });<br />
&nbsp; &nbsp; });<br />
}<br />
<br />
init(function () {<br />
&nbsp; &nbsp; fetch(id, checker);<br />
})</code></pre>
<p>
    We could also put this in a module or wrap a (pseudo) class around it if we wanted to. The main point is that we
    don't have to nest inline callbacks to get the job done, we can name them.
</p>
