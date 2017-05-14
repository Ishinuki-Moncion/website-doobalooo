'use strict';

var Express = require('express');
var path = require('path');
var IRC = require('twitch-irc-lite');

const app = Express();
var chatResponses = [];

var session = new IRC('oauth:xixcu9v0oa47jihghwpai9imjp8xw4',
                      'TheHunter_bot');
session.join('jenaurf');
session.chatEvents.addListener('message', function(channel, from, message)
  {
    console.log(channel, from, message);
    chatResponses.push({ from: from, message: message });
  });

app.use(Express.static(path.resolve(__dirname, '..')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

app.get('/chat', (req, res) => {
  res.send(chatResponses);
  chatResponses.length = 0;
});

app.listen(3000, () => {
  console.log('Server is up and running...');
});

module.exports = app;
