import { Response } from 'express';
import axios from 'axios';
import { getPosts } from '../utils/db';
import { Post } from '../models/post';

const url =
	'http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all';

export const getSiteData = async () => {
	const res = await axios.get(url, {
		proxy: {
			host: 'torproxy',
			port: 8118,
		},
	});
	return res.data;
};

export const writeNewPosts = async (res: Response) => {
	const newPosts: Post[] = await getPosts();
	res.write(`data: ${JSON.stringify(newPosts)}\n\n`);
};
