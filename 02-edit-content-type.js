const contentfulManagement = require('contentful-management');

(async function updatePageContentType() {
	const client = contentfulManagement.createClient({
		accessToken: '<cmt>'
	});
	const space = await client.getSpace('<space_id>');
	const environment = await space.getEnvironment('master');

	const pageContentType = await environment.getContentType('page');
	pageContentType.fields.push({
		id: 'description',
		name: 'Description',
		required: false,
		localized: false,
		type: 'Symbol'
	})
	await pageContentType.update();
	const updatedPageContentType = await environment.getContentType('page');
	await updatedPageContentType.publish();
})();