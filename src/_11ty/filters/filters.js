export default async (eleventyConfig) => {
	eleventyConfig.addFilter(
		"addNonBreakingSpace",
		await import("./addNonBreakingSpace.cjs"),
	);
	eleventyConfig.addFilter("dateObj", await import("./dateObj.cjs"));
	eleventyConfig.addFilter("dateToFormat", await import("./dateToFormat.cjs"));
	eleventyConfig.addFilter("dateToISO", await import("./dateToISO.cjs"));
	eleventyConfig.addFilter(
		"dateToLocaleDateFull",
		await import("./dateToLocaleDateFull.cjs"),
	);
	eleventyConfig.addFilter(
		"dateToLocaleLongShort",
		await import("./dateToLocaleLongShort.cjs"),
	);
	eleventyConfig.addFilter(
		"dateToRelative",
		await import("./dateToRelative.cjs"),
	);
	eleventyConfig.addFilter("excerpt", await import("./excerpt.cjs"));
	eleventyConfig.addFilter(
		"filterTagList",
		await import("./filterTagList.cjs"),
	);
	eleventyConfig.addFilter("getAllTags", await import("./getAllTags.cjs"));
	eleventyConfig.addFilter("getDomain", await import("./getDomain.cjs"));
	eleventyConfig.addFilter(
		"getLatestCollectionItemDate",
		await import("./getLatestCollectionItemDate.cjs"),
	);
	eleventyConfig.addFilter(
		"getUrlExtension",
		await import("./getUrlExtension.cjs"),
	);
	eleventyConfig.addFilter("getYouTubeId", await import("./getYouTubeId.cjs"));
	eleventyConfig.addFilter(
		"htmlDateString",
		await import("./htmlDateString.cjs"),
	);
	eleventyConfig.addFilter("imageLink", await import("./imageLink.cjs"));
	eleventyConfig.addFilter("includes", await import("./includes.cjs"));
	eleventyConfig.addFilter("limit", await import("./limit.cjs"));
	eleventyConfig.addFilter("linkGraph", await import("./linkGraph.cjs"));
	eleventyConfig.addFilter("md", await import("./md.cjs"));
	eleventyConfig.addFilter("newUrl", await import("./newUrl.cjs"));
	eleventyConfig.addFilter("objKeys", await import("./objKeys.cjs"));
	eleventyConfig.addFilter("readableDate", await import("./readableDate.cjs"));
	eleventyConfig.addFilter(
		"removeRandomLink",
		await import("./removeRandomLink.cjs"),
	);
	eleventyConfig.addFilter("split", await import("./split.cjs"));
	eleventyConfig.addFilter("unique", await import("./unique.cjs"));
};
