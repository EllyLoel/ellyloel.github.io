import { DateTime } from 'luxon';

export default (date) => {
	// date input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	return DateTime.fromJSDate(new Date(date), {
		zone: "Australia/Melbourne",
	}).toFormat("yyyy-LL-dd");
};
