Meteor.methods({
	'visitor.identify': function(visitor){
		return Visitor.collection.upsert({
			visitorId: visitor.visitorId
		}, {
			$set: visitor
		});
	}
});