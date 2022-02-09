import natural from 'natural';

export enum Sentiment {
	Positive = 'Positive',
	Negative = 'Negative',
	Neutral = 'Neutral',
}

//process string before analysis
const tokenizer = (string: string): string[] => {
	const tokenizer: natural.WordTokenizer = new natural.WordTokenizer();
	return tokenizer.tokenize(string);
};

export const getSentiment = (data: string): Sentiment => {
	const Analyzer = natural.SentimentAnalyzer;
	const stemmer = natural.PorterStemmer;
	const tokenizedData = tokenizer(data);

	const analyzer = new Analyzer('English', stemmer, 'afinn');
	const sentiment = analyzer.getSentiment(tokenizedData);
	return sentiment > 0.3
		? Sentiment.Positive
		: sentiment < -0.3
		? Sentiment.Negative
		: Sentiment.Neutral;
};
