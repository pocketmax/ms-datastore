var _ = require('lodash'),
	Redis = require("redis");

var pathToObj = function (path, tailData) {
	var obj = {};
	var parentObj = obj;
	var parts = path.split("."), part;
	while(part = parts.shift()) {
		if(!parts.length) {
			obj[part] = tailData;
		} else {
			obj[part] = {};
		}
		obj = obj[part];
	}
	return parentObj;
};

module.exports = function (cfg){
	var client = Redis.createClient(6379, 'localdocker', {detect_buffers: true});

	this.set = function(key, val, cb){
		client.set(key, val, cb);
	};
	this.get = function(key, cb){
		// TODO: use one of the SCAN commands instead of keys for performance reasons
		client.keys(key + '.*', function(err, keys){
			client.mget(keys, function(err, vals){

				if(!vals) return false;

				var finalObj = {};
				for(var i = 0; i < vals.length; i++){

					finalObj = _.merge(finalObj, pathToObj(keys[i], vals[i]));
				}

				finalObj = _.get(finalObj, key);

				cb(null, finalObj);
			});

		});
	};

	this.del = function(key, cb){
		client.keys(key + '.*', function(err, keys){
			client.del(keys, function(err, results){
				cb(null, results);
			});
		});
	};


};

