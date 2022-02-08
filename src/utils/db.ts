import mongoose from 'mongoose';
import { Post, PostModel } from '../models/post';

mongoose
	.connect('mongodb://mongo:27017/docker-node-mongo')
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

export const addToDB = async (posts: Post[]): Promise<void> => {
	for (const post of posts) {
		const inDB = await isInDB(post);
        
		if (inDB === false) {
			new PostModel({ ...post }).save((err: any, _data: any) => {
				if (err) {
					return console.error(err);
				}
				console.log('Document inserted successfully!');
			});
		}
	}
};

const isInDB = async (post: Post): Promise<Boolean> => {
	const res = await PostModel.findOne({ PostID: post.PostID }).exec();
	return res === null ? false : true;
};
