import express, { Application } from 'express';
import { addToDB } from './utils/db';
const app: Application = express();
const port = 8080;

import { scraper } from './utils/scraper';

setInterval(async () => {
	console.log('new scrape🕶');

	const posts = await scraper();

	if (posts != undefined) {
		await addToDB(posts);
	} else {
		console.log('no new posts');
	}
}, 2 * 60 * 1000); //2 minutes = 2(min) * 60(sec) * 1000(ms)

app.listen(port, (): void => {
	console.log(`Server running on ${port}`);
});
