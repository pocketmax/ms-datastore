module.exports = function (){

	var dataset = {};

	this.add = function(key, val){
		dataset[key] = val;
	};

	this.set = function(key, val){
		dataset[key] = val;
	};

	this.delete = function(key){
		delete dataset[key];
	};

	this.get = function(key){
		return dataset[key];
	};


};

