var defaultCollectionName = 'visitor.visitors'
	, collection;

Visitor = {
	init: function(options){
		options = _.defaults(options || {}, {
			collection: defaultCollectionName
		});

		this.collection = new Mongo.Collection(options.collection);
		this.collection._ensureIndex({visitorId: 1});
	}
};