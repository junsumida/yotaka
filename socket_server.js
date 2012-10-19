/*global require:true */
// var config = require("./config.js").Config;

var io = require('socket.io').listen(50710);
var redis = require('redis');
var rclient = redis.createClient();

rclient.on("ready", function(){
  console.log("rclient is ready.");
});

rclient.zrange('hage', 0, -1, function(err, members){
	console.log(members);
});

	/*
	rclient.subscribe(config.redis_channel);

	rclient.on("message", function(channel, message){
	var msg_json = JSON.parse(message);
	console.log(message);
	for(var i=0; i<msg_json.tokens.length; i++){
	io.sockets.in(msg_json.tokens[i]).volatile.emit("message", msg_json);
	}
	});

	io.sockets.on('connection', function(socket){
	socket.volatile.emit('connected');

	socket.on('join', function(token){
	socket.join(token);
	io.sockets.in(token).emit("joined", token);
	}); 
	});
  */
