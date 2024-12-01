import fsp from 'node:fs/promises';

export default async (path, alt = "") => {
	try {
		const data = await fsp.readFile(path, { encoding: "utf8" });
		if (alt) {
			return `<figure>${data}<figcaption>${alt}</figcaption></figure>`;
		}
		return `<figure>${data}</figure>`;
	} catch (err) {
		console.error(err);
		return;
	}
};
