var IRC = require('twitch-irc-lite');

var session = new IRC('oauth:xixcu9v0oa47jihghwpai9imjp8xw4',
                  'TheHunter_bot');

session.join('doobalooo');
session.chatEvents.addListener('message', function(channel, from, message){
  console.log(channel, from, message);
});
