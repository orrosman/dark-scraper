import { Schema, model } from 'mongoose';
import { Sentiment } from '../utils/analysis';

export interface Post {
	PostID: string;
	Author: string;
	Title: string;
	Content: string;
	Date: string;
	Sentiment: Sentiment;
}

const PostSchema = new Schema({
	PostID: {
		type: String,
		required: true,
	},
	Author: {
		type: String,
		required: true,
	},
	Title: {
		type: String,
		required: true,
	},
	Content: {
		type: String,
		required: true,
	},
	Date: {
		type: String,
		required: true,
	},
	Sentiment: {
		type: String,
		required: true,
	},
});

export const PostModel = model('Post', PostSchema);
