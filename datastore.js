module.exports = function (){

	var dataset = {};

	this.add = function(key, val){
		dataset[key] = val;
	};

};

