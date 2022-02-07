import { JSDOM } from 'jsdom';

export const getTitle = (element: Element): String => {
	const title = element
		.querySelector('div.pre-info.pre-header > div > div.col-sm-5 > h4')
		?.textContent?.trim();
	if (title !== null && title !== undefined) {
		return title;
	} else {
		return '';
	}
};

export const getContent = (element: Element): String | null => {
	const content = element
		.querySelector('div.well.well-sm.well-white.pre > div > ol')
		?.textContent?.trim();
	if (content !== null && content !== undefined) {
		return content;
	} else {
		return '';
	}
};

export const getAuthor = (element: Element): String => {
	const info = element
		.querySelector('div.pre-info.pre-footer > div > div:nth-child(1)')
		?.textContent?.trim();

	if (info !== null && info !== undefined) {
		const author = info.match(/by (.*) at/);
		if (author !== null) {
			return author[1];
		}
	}
	return '';
};

export const getDate = (element: Element): String | null => {
	const info = element
		.querySelector('div.pre-info.pre-footer > div > div:nth-child(1)')
		?.textContent?.trim();

	if (info !== null && info !== undefined) {
		const date = info.match(/at (.*)/);
		if (date !== null) {
			return new Date(date[1]).toUTCString();
		}
	}
	return null;
};
