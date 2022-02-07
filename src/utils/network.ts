import axios from 'axios';

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
