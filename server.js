const express = require('express');

const app = express();

// this sets up a static file server that can serve
// assets from a public folder
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
