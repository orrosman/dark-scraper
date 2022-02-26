import React from 'react';
import { Card } from 'react-bootstrap';

const Post = ({ post }) => {
	return (
		<Card className="text-center">
			<Card.Header>
				{post.Title} - {post.Author}
			</Card.Header>
			<Card.Body>
				<Card.Text>{post.Content}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">{post.Date}</Card.Footer>
		</Card>
	);
};
export default Post;
