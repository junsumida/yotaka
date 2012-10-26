/*global require:true, module:true, process:true */
// #!/usr/bin/env node

var app = module.exports = require('railway').createServer();

if (!module.parent) {
    var port = process.env.PORT || 3000;
    app.listen(port);
    var io = require('socket.io').listen(app.listen(port));
    var redis = require('redis');
    var rcli  = redis.createClient();

    rcli.on("ready", function(){
      console.log("rclient is ready.");
    });

    rcli.zrange('hage', 0, -1, function(err, mems){
      console.log(mems);
    });

    console.log("Railway server listening on port %d within %s environment", port, app.settings.env);
}

