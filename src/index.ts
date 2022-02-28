import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { addToDB } from './utils/db';
import { scraper } from './utils/scraper';
import { writeNewPosts } from './utils/network';

const app: Application = express();
const port = 8080;
const time_interval = 2 * 60 * 1000; //2 minutes = 2(min) * 60(sec) * 1000(ms)

app.use(cors());

setInterval(async () => {
	console.log('new scrape🕶');

	const posts = await scraper();

	if (posts != undefined) {
		await addToDB(posts);
	} else {
		console.log('no new posts');
	}
}, time_interval);

app.get('/init', async (_req: Request, res: Response) => {
	res.writeHead(200, {
		'Content-Type': 'text/event-stream',
		'Cache-Control': 'no-cache',
		Connection: 'keep-alive',
	});

	//initialize first data source
	await writeNewPosts(res);

	setInterval(async () => {
		await writeNewPosts(res);
	}, time_interval);
});

app.listen(port, (): void => {
	console.log(`Server running on ${port}`);
});
