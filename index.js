const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const cors = require('express-cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
app.locals.title = 'getUserMedia API'

app.get('/', (request, response) => {
  fs.readFile(`${__dirname}/public/index.html`, (err, file) => {
    response.send(file);
  });
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;
