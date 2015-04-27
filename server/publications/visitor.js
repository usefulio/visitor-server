Meteor.publish('visitor.visitor', function(visitorId){
	return Visitor.collection.find({visitorId: visitorId});
});