import { DateTime } from 'luxon';

export default (date, format) =>
	DateTime.fromJSDate(new Date(date), { zone: "Australia/Melbourne" }).toFormat(
		String(format)
	);
