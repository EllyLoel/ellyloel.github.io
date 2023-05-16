const { AssetCache } = require("@11ty/eleventy-fetch");
const Parser = require("rss-parser");

module.exports = async () => {
	let asset = new AssetCache("micro-blog-short-notes");
	let parser = new Parser();

	// if (asset.isCacheValid("0s")) return asset.getCachedValue();

	let feed = await parser.parseURL(
		"https://ellyloel.micro.blog/categories/short-notes/feed.xml"
	);

	await asset.save(feed, "json");

	return feed;
};
