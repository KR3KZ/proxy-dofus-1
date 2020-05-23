# proxy-dofus-1
Proxy for Dofus 1 in NodeJS.

It is WIP so only the login phase is supported.

Install NodeJS. (https://nodejs.org/)

Edit your config.xml and add :
```js
<conf name="Proxy">
  <connserver name="Proxy" ip="127.0.0.1" port="1500"/>
  <dataserver url="http://dofusretro.cdn.ankama.com/" priority="1"/>
</conf>
```
Start it in console mode `node .\server.js`.

Log in into the Proxy tab on the Dofus client.
