import { JSDOM } from 'jsdom';
import { getSiteData } from './network';
import {
	getAuthor,
	getContent,
	getDate,
	getTitle,
	getPostID,
} from './extractors';
import { Post } from '../models/post';
import { getSentiment } from './analysis';

export const scraper = async (): Promise<Post[] | undefined> => {
	const siteData = await getSiteData();
	try {
		const html = new JSDOM(siteData);
		const posts = html.window.document.querySelectorAll(
			'#list .row:not(:last-child) .col-sm-12'
		);
		const list: Post[] = [];
		for (const elem of posts) {
			const PostID = getPostID(elem);
			const Title = getTitle(elem);
			const Content = getContent(elem);
			const Author = getAuthor(elem);
			const Date = getDate(elem);

			if (
				PostID !== null &&
				Title !== null &&
				Content !== null &&
				Author !== null &&
				Date !== null
			) {
				const Sentiment = getSentiment(Content);
				const post: Post = { PostID, Title, Author, Content, Date, Sentiment };
				list.push(post);
			}
		}
		return list;
	} catch (err) {
		console.log(err);
	}
};
