const contentfulManagement = require('contentful-management');

(async function createPage() {
	const client = contentfulManagement.createClient({
		accessToken: '<cmt>'
	});
	const space = await client.getSpace('<space_id>');
	const environment = await space.getEnvironment('master');

	const newPage = await environment.createEntry('page', {
		fields: {
			title: {
				'en-US': 'This entry is created form code'
			},
			description: {
				'en-US': 'This is description'
			}
		}
	});
	await newPage.publish();
})();