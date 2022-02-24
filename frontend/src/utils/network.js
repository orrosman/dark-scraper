import axios from 'axios';

const API_URL = 'localhost:8080';

const getPosts = async () => {
	const res = await axios.get(`${API_URL}/posts`);
	return res.data;
};
