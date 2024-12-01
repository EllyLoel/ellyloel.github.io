import htmlmin from 'html-minifier';

export default function (content) {
	if (
		process.env.ELEVENTY_ENV === "production" &&
		this.page.outputPath &&
		this.page.outputPath.endsWith(".html")
	) {
		let minified = htmlmin.minify(content, {
			collapseWhitespace: true,
			removeComments: true,
			useShortDoctype: true,
		});
		return minified;
	}

	return content;
};
