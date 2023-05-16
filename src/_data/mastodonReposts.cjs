const EleventyFetch = require("@11ty/eleventy-fetch");
require("dotenv").config();

module.exports = async () => {
	const mastodonAccountId = "109426807254697808";
	const mastodonApiUrl = `https://front-end.social/api/v1/accounts/${mastodonAccountId}/statuses?limit=40&exclude_reblogs=false`;

	try {
		const data = await EleventyFetch(mastodonApiUrl, {
			directory: "mastodonReposts",
			duration: "0s",
			fetchOptions: {
				headers: {
					Authorization: `Bearer ${process.env.MASTODON_ACCESS_TOKEN}`,
				},
			},
			type: "json",
		});

		if (data.length) {
			let response = [];
			for (const item of data) {
				if (item?.reblog?.reblogged === true) {
					response.push({
						accountAvatar: item.reblog.account.avatar,
						accountLink: item.reblog.account.url,
						content: item.reblog.content,
						created: item.reblog.created_at,
						link: item.reblog.url,
						name: item.reblog.account.display_name,
					});
				}
			}

			const newestItemDate = new Date(
				Math.max(...response.map((item) => new Date(item?.created || "")))
			);

			return {
				items: response,
				newestItemDate,
			};
		}
	} catch (error) {
		console.log(`\n${error}\n`);
		return [];
	}
};
