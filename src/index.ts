import express, { Application } from 'express';
import { addToDB } from './utils/db';
const app: Application = express();
const port = 8080;

import { scraper } from './utils/scraper';

app.get('/', async (_req, _res): Promise<void> => {
	const posts = await scraper();

	if (posts != undefined) {
		await addToDB(posts);
	} else {
		console.log('no new posts');
	}
});

app.listen(port, (): void => {
	console.log(`Server running on ${port}`);
});
