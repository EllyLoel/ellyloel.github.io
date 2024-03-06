const path = require("path");
const eleventyImage = require("@11ty/eleventy-img");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
	eleventyConfig.addShortcode(
		"image",
		async (
			src,
			alt,
			caption,
			noItalics,
			sizes = "(max-width: 768px) 100vw, 768px",
			widths,
			classes
		) => {
			if (alt === undefined) {
				// You bet we throw an error on missing alt (alt="" works okay)
				throw new Error(`Missing \`alt\` on image from: ${src}`);
			}

			const isLocal = src.includes("./src/assets/img/");
			const imageExists = async () => {
				try {
					return await fetch(src, { method: "HEAD" }).then((res) => res.ok);
				} catch {
					return false;
				}
			};

			const generateImage = async () => {
				let formats = ["avif", "webp", "auto"];

				let metadata = await eleventyImage(src, {
					cacheOptions: {
						duration: "4w",
					},
					formats,
					outputDir: path.join(eleventyConfig.dir.output, "img"),
					widths: widths || ["auto"],
				});

				let imageAttributes = {
					alt,
					class: `[ image ] ${classes}`,
					decoding: "async",
					loading: "lazy",
					sizes,
				};

				if (caption) {
					return `<figure>${eleventyImage.generateHTML(
						metadata,
						imageAttributes,
						{
							whiteSpace: "inline",
						}
					)}<figcaption ${
						noItalics ? `class="no-italics"` : ``
					}>${caption}</figcaption></figure>`;
				}

				return eleventyImage.generateHTML(metadata, imageAttributes, {
					whiteSpace: "inline",
				});
			};

			const generatePlaceholder = () => {
				return `<div class="image-placeholder ${classes}"></div>`;
			};

			try {
				return isLocal
					? await generateImage()
					: await imageExists().then(async (exists) =>
							exists ? await generateImage() : generatePlaceholder()
					  );
			} catch (e) {
				console.log(e);
				return "";
			}
		}
	);
};
