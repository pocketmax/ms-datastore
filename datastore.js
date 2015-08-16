module.exports = function (){

	var dataset = {};

	this.add = function(key, val){
		dataset[key] = val;
	};

	this.set = function(key, val){
		dataset[key] = val;
	};

};

