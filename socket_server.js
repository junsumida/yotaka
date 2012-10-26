/*global io:true, redis:true, require, socket */

var io = require('socket.io').listen(50710);
var redis = require('redis');
var rclient = redis.createClient();

rclient.on("ready", function(){
  console.log("rclient is ready.");
});

rclient.zrange('hage', 0, -1, function(err, members){
  console.log(members);
});

io.sockets.on('connection', function(){
  console.log("connection opened");
  socket.on('hoge', function(data){
      console.log("dareka kitayo");
  });
});

