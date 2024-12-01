export default async (eleventyConfig) => {
	eleventyConfig.addPairedShortcode("figure", await import("./figure.cjs"));
	eleventyConfig.addPairedShortcode(
		"feedBlock",
		await import("./feedBlock.cjs"),
	);
	eleventyConfig.addShortcode("gh_edit", await import("./gh_edit.cjs"));
	eleventyConfig.addPairedShortcode("md", await import("./md.cjs"));
	eleventyConfig.addShortcode("random", await import("./random.cjs"));
	eleventyConfig.addShortcode("svg", await import("./svg.cjs"));
};
