'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.redirect("https://bracketbot.ga")
});
router.get('/invite', (req, res) => res.redirect("https://discord.com/api/oauth2/authorize?client_id=606197308635480093&permissions=8&scope=bot"));
router.get('/support', (req, res) => res.redirect("https://discord.gg/7e9kcaX"));

router.get("*", (req, res) {
res.redirect("/")
})
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
