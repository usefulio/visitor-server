Package.describe({
	name: 'useful:visitor-server',
	version: '0.0.1',
	summary: 'Server-side infrastructure for tracking visitors to your site.',
	git: '',
	documentation: 'README.md'
});

Package.onUse(function(api) {

	api.versionsFrom('1.1');

	// ====== BUILT-IN PACKAGES =======

	api.use([
		'mongo'
	], 'server');

	// ====== 3RD PARTY PACKAGES =======

	// ====== BOTH =======

	// ====== SERVER =======
	api.addFiles([
		'server/lib/visitor.js'
		, 'server/publications/visitor.js'
		, 'server/methods/identifyVisitor.js'
	], 'server');

	// ====== CLIENT =======

	// ====== EXPORTS =======

	api.export('Visitor');
});

Package.onTest(function(api) {
	api.use('tinytest');
});
