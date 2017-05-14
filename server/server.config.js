'use strict';

var Express = require('express');
var path = require('path');

const app = Express();

app.use(Express.static(path.resolve(__dirname, '..')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

app.get('/chat', (req, res) => {
  res.json({test: "test"});
});

app.listen(3000, () => {
  console.log('Server is up and running...');
});

module.exports = app;
