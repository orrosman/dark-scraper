import express, { Application } from 'express';
const app: Application = express();
const port = 3000;

import { scraper } from './utils/scraper';

app.get('/', async (req, res): Promise<void> => {
	res.json(await scraper());
});

app.listen(port, (): void => {
	console.log(`Server running on ${port}`);
});
