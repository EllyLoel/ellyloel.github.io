const pluginUnfurl = require("eleventy-plugin-unfurl");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(pluginUnfurl, {
		duration: "4w",
		template: async (props) => {
			return props
				? `<article class="unfurl">${
						props?.author
							? `<small class="unfurl__meta"><span class="unfurl__publisher">${props.author}</span></small>`
							: ``
				  }${
						props?.url || props?.title
							? `<span class="h4 unfurl__heading${
									!props?.author ? ` unfurl__meta` : ``
							  }"><a class="unfurl__link" href="${props?.url}">${
									props?.title
							  }</a></span>`
							: ``
				  }${
						props?.description
							? `<p class="unfurl__description">${props.description}</p>`
							: ``
				  }${
						props?.image?.url
							? `<img class="[ image unfurl__image u-photo ]" src="${props?.image?.url}" width="${props?.image?.width}" height="${props?.image?.height}" alt="">`
							: ``
				  }</article>`
				: ``;
		},
	});
};
