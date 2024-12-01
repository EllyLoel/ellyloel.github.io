// External imports
import pluginEmoji from "eleventy-plugin-emoji";
import pluginFavicons from "eleventy-plugin-gen-favicons";
import pluginIcons from "eleventy-plugin-icons";
import pluginInterlinker from "@photogabble/eleventy-plugin-interlinker";
import pluginNavigation from "@11ty/eleventy-navigation";
import pluginNestingToc from "eleventy-plugin-nesting-toc";
import pluginPostCss from "eleventy-plugin-postcss";
import pluginRollup from "eleventy-plugin-rollup";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxhighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginWebmentions from "eleventy-plugin-webmentions";

// Internal imports
import metadata from "../../_data/metadata.json" with { type: "json" };

export default async (eleventyConfig) => {
	// External plugins
	eleventyConfig.addPlugin(pluginEmoji, {
		className: "[ emoji ]",
	});
	eleventyConfig.addPlugin(pluginFavicons);
	eleventyConfig.addPlugin(pluginIcons, {
		icon: {
			insertAttributes: {
				"aria-hidden": "true",
			},
		},
		sources: {
			fab: "node_modules/@fortawesome/fontawesome-free/svgs/brands",
			far: "node_modules/@fortawesome/fontawesome-free/svgs/regular",
			fas: "node_modules/@fortawesome/fontawesome-free/svgs/solid",
			local: "src/assets/svg",
		},
	});
	eleventyConfig.addPlugin(pluginIcons, {
		icon: {
			insertAttributes: {
				role: "img",
			},
			shortcode: "labelledIcon",
		},
		sources: {
			fab: "node_modules/@fortawesome/fontawesome-free/svgs/brands",
			far: "node_modules/@fortawesome/fontawesome-free/svgs/regular",
			fas: "node_modules/@fortawesome/fontawesome-free/svgs/solid",
			local: "src/assets/svg",
		},
	});
	eleventyConfig.addPlugin(pluginIcons, {
		icon: {
			class: (name, source) => `inline-icon icon-${name}`,
			insertAttributes: {
				"aria-hidden": "true",
			},
			shortcode: "inlineIcon",
		},
		sources: {
			fab: "node_modules/@fortawesome/fontawesome-free/svgs/brands",
			far: "node_modules/@fortawesome/fontawesome-free/svgs/regular",
			fas: "node_modules/@fortawesome/fontawesome-free/svgs/solid",
			local: "src/assets/svg",
		},
	});
	eleventyConfig.addPlugin(pluginIcons, {
		icon: {
			class: (name, source) => `inline-icon icon-${name}`,
			insertAttributes: {
				role: "img",
			},
			shortcode: "labelledInlineIcon",
		},
		sources: {
			fab: "node_modules/@fortawesome/fontawesome-free/svgs/brands",
			far: "node_modules/@fortawesome/fontawesome-free/svgs/regular",
			fas: "node_modules/@fortawesome/fontawesome-free/svgs/solid",
			local: "src/assets/svg",
		},
	});
	eleventyConfig.addPlugin(pluginInterlinker);
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginNestingToc, {
		tags: ["h2", "h3", "h4", "h5", "h6"],
		wrapper: "nav",
		wrapperClass: "[ toc ][ recursive-flow ]",
	});
	eleventyConfig.addPlugin(pluginPostCss);
	eleventyConfig.addPlugin(pluginRollup, {
		rollupOptions: "rollup.config.js",
		scriptGenerator: (file, attributes = {}) => {
			let attributesString = " ";
			for (const [key, value] of Object.entries(attributes)) {
				attributesString += `${key}="${value}" `;
			}
			return `<script src="${file}" type="module"${attributesString.trimEnd()}></script>`;
		},
	});
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxhighlight);
	eleventyConfig.addPlugin(pluginWebmentions, {
		domain: metadata.domain,
		mentionTypes: {
			comments: ["in-reply-to"],
			likes: ["like-of"],
			mentions: ["bookmark-of", "mention-of"],
			reposts: ["repost-of"],
		},
		token: process.env.WEBMENTION_IO_API_KEY,
		truncate: false,
	});

	// Internal plugins
	eleventyConfig.addPlugin(await import("./drafts.cjs"));
	eleventyConfig.addPlugin(await import("./excerpt.cjs"));
	eleventyConfig.addPlugin(await import("./image.cjs"));
	eleventyConfig.addPlugin(await import("./markdown.cjs").plugin);
	eleventyConfig.addPlugin(await import("./unfurl.cjs"));
};
