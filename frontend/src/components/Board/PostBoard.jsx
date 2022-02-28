import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Post from './Post';

const PostBoard = ({ posts }) => {
	return (
		<Container>
			<h3>Posts</h3>
			<Link to="/" className="float-end mb-2">
				Table view
			</Link>

			<Container
				style={{
					'margin-top': '2rem',
					display: 'grid',
					'grid-template-columns': 'repeat(auto-fill, minmax(25rem, 1fr))',
					gap: '2rem',
				}}
			>
				{posts.map((post, i) => (
					<Post key={i} post={post} />
				))}
			</Container>
		</Container>
	);
};
export default PostBoard;
