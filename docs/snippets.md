# Useful snippets

Find element that is causing the showing of horizontal scrollbar in Google Chrome

```js
(() => {
    const style = document.createElement('style');
    style.innerHTML = '* { outline: 1px solid #f00 !important; }';
    document.body.appendChild(style);
})();
```

Getting certificate via DNS verification.

```sh
apt install python3-certbot-dns-standalone
certbot -d ci.epicmall.eu --preferred-challenges dns --manual certonly
```