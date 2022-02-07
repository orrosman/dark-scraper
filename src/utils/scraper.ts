// run docker with:
// docker run -it --name dark-scraper -p 8118:8118 -p 9050:9050 -d dperson/torproxy

import { JSDOM } from 'jsdom';
import { getSiteData } from './network';
import { getAuthor, getContent, getDate, getTitle } from './extractors';

interface Post {
	Author: String;
	Title: String;
	Content: String;
	Date: String;
}

export const scraper = async () => {
	const siteData = await getSiteData();
	try {
		const html = new JSDOM(siteData);
		const posts = html.window.document.querySelectorAll(
			'#list .row:not(:last-child) .col-sm-12'
		);
		const list: Post[] = [];
		for (const elem of posts) {
			const Title = getTitle(elem);
			const Content = getContent(elem);
			const Author = getAuthor(elem);
			const Date = getDate(elem);

			if (
				Title !== null &&
				Content !== null &&
				Author !== null &&
				Date !== null
			) {
				const post: Post = { Title, Author, Content, Date };
				list.push(post);
			}
		}
		console.log(list);
		return list;
	} catch (err) {
		console.log(err);
	}
};
scraper();
