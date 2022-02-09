import { Schema, model } from 'mongoose';

export interface Post {
	PostID: string;
	Author: string;
	Title: string;
	Content: string;
	Date: string;
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
});

export const PostModel = model('Post', PostSchema);
