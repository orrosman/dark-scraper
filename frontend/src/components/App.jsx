import React from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import PostsTable from './Table/PostsTable';
import PostsBoard from './Board/PostBoard';
import Sidebar from './Sidebar';

const App = () => {
	const [posts, setPosts] = useState([
		{ Author: 'me', Title: 'title', Content: 'bla bla bla', Date: 'now' },
	]);

	const evtSrc = useRef(null);

	const listenEvt = useCallback(() => {
		if (!evtSrc.current) {
			const source = (evtSrc.current = new EventSource(
				`http://localhost:8080/init`
			));

			source.addEventListener('open', () => {
				console.log('SSE opened!');
			});

			source.addEventListener('message', (e) => {
				const data = JSON.parse(e.data);
				setPosts(data);
			});

			source.addEventListener('error', (e) => {
				console.error('Error: ', e);
			});
		}
	}, []);

	useEffect(() => {
		listenEvt();
		return () => evtSrc.current.close();
	}, [posts]);

	return (
		<div className="d-flex text-center">
			<Sidebar />
			<Routes>
				<Route path="/" element={<PostsTable posts={posts} />} />
				<Route path="/board" element={<PostsBoard posts={posts} />} />
			</Routes>
		</div>
	);
};

export default App;
