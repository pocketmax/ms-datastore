var _ = require('lodash');

var jsonPathToObj = function (path, tailData) {
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


module.exports = function (){

	var dataset = {};

	this.add = function(key, val){
		dataset[key] = val;
		return this;
	};

	this.set = function(key, val){
		dataset[key] = val;
		return this;
	};

	this.delete = function(key){
		delete dataset[key];
		return this;
	};

	this.get = function(key){

		var prevObj = {};

		for(var i in dataset){
			if(new RegExp('^' + key).test(i)){
				// merge matching objects together based on key path
				var obj = jsonPathToObj(i,dataset[i]);
				prevObj = _.merge(prevObj, obj);

			}
		}

		return prevObj;
	};


};

