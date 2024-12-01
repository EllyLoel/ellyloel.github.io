export default async (eleventyConfig) => {
	eleventyConfig.addTransform("htmlmin", await import("./htmlMin.cjs"));
};
