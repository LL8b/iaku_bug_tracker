# iaku_bug_tracker
v.0.0.2 | L.Blair, RR

vue.js, express, sequelize, rest-api, gdscript, httpclient
The front box and admin cms are combined for example purposes. However you can copy the front box and connect to the local node server however you like, there's also a exe for windows-desktop use. 
<a href="https://lenardblair.github.io/iaku_bug_tracker/index.html" target="_blank">more details</a>

# install
With NPM installed.
You will need to install the dependencies for both the 'User-Admin' and Node/Express Server.

cd / [npm install]

cd / front-end [npm install]

# edit PostgreSQL
app/config/db.config.js

# front box
the wasm file sends request to [localhost:8080/api/bug_reports]

# run in development
start the server
cd /[node server.js]

start vue
cd/front_end/src/components [npm run serve]






