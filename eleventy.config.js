// External imports
import "dotenv/config";

// Internal imports
// import plugins from "./src/_11ty/plugins/plugins.js";
import filters from "./src/_11ty/filters/filters.js";
import shortcodes from "./src/_11ty/shortcodes/shortcodes.js";
import transforms from "./src/_11ty/transforms/transforms.js";

export default (eleventyConfig) => {
	// Plugins
	// eleventyConfig.addPlugin(plugins);

	// Collections
	eleventyConfig.addCollection("allSortedByDate", (collectionApi) =>
		collectionApi
			.getAll()
			.sort((a, b) => new Date(b.data.date) - new Date(a.data.date)),
	);
	["Blog", "Bookmarks", "Garden", "Projects", "TIL"].forEach((collection) => {
		eleventyConfig.addCollection(
			`${collection}SortedByDate`,
			(collectionApi) => {
				return collectionApi
					.getFilteredByTag(collection)
					.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
			},
		);
	});
	eleventyConfig.addCollection("postsSortedByDate", (collectionApi) => {
		const collection = [];
		collection.push(...collectionApi.getFilteredByTag("Blog"));
		collection.push(...collectionApi.getFilteredByTag("Bookmarks"));
		collection.push(...collectionApi.getFilteredByTag("Garden"));
		collection.push(...collectionApi.getFilteredByTag("Projects"));
		collection.push(...collectionApi.getFilteredByTag("TIL"));
		collection.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
		return collection;
	});

	// Filters
	eleventyConfig.addPlugin(filters);

	// Shortcodes
	eleventyConfig.addPlugin(shortcodes);

	// Transforms
	eleventyConfig.addPlugin(transforms);

	// Copy/pass-through files
	eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

	// Watch targets
	eleventyConfig.addWatchTarget("src/input/css");
	eleventyConfig.addWatchTarget("src/input/js");
};

export const config = {
	dir: {
		data: "../_data", // Relative to input
		includes: "../_includes", // Relative to input
		input: "src/input",
		layouts: "../_layouts", // Relative to input
		output: "_site",
	},
	htmlTemplateEngine: "njk",
	markdownTemplateEngine: "njk",
	templateFormats: ["njk", "md", "11ty.js"],
};
