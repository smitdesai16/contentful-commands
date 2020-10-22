const contentfulManagement = require('contentful-management');

(async function createPageContentType() {
	const client = contentfulManagement.createClient({
		accessToken: '<cmt>'
	});
	const space = await client.getSpace('<space_id>');
	const environment = await space.getEnvironment('master');

	const pageContentType = await environment.createContentTypeWithId('page', {
		name: 'Page',
		description: 'This is page description',
		displayField: 'title',
		fields: [{
			id: 'title',
			name: 'Title',
			required: true,
			localized: false,
			type: 'Symbol'
		}]
	});
	await pageContentType.publish();
})();