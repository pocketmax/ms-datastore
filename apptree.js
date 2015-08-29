var TreeStore = require('./treestore');

var ts = new TreeStore();

ts.set('world.NA.US.AZ.name','Arizona');

ts.set('world.NA.US.name','United States');
ts.set('world.SA.BR.name','Brazil');

ts.get('world.NA.US', function(){
	console.log(JSON.stringify(arguments[1], null, 1));
});

ts.del('world.SA', function(err, results){
	console.log(arguments);
});

/*
ts.set('World.NA.US',{
	name: 'United States'

}).set('World.NA.CA',{
	name: 'Canada'

}).set('World.NA.US.AZ',{
	name: 'Arizona'

}).set('World',{
	name: 'Arizona'

}).set('World.NA.US.CO',{
	name: 'Colorado'

});

console.log(JSON.stringify(ts.delete('World.NA'),null,1));
*/