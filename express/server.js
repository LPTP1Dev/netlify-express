'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');


app.get('/', (req, res) => {
  res.redirect("https://bracketbot.ga")
});
app.get('/invite', (req, res) => res.redirect("https://discord.com/api/oauth2/authorize?client_id=606197308635480093&permissions=8&scope=bot"));
app.get('/support', (req, res) => res.redirect("https://discord.gg/7e9kcaX"));

app.get("*", (req, res) {
res.redirect("/")
})
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
