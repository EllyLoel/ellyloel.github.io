import { DateTime } from 'luxon';

export default (date) =>
	DateTime.fromJSDate(new Date(date), {
		zone: "Australia/Melbourne",
	}).toLocaleString({ dateStyle: "long", timeStyle: "short" });
