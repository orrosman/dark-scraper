import React from 'react';
import { Container, Table } from 'react-bootstrap';

const PostsTable = ({ posts }) => {
	return (
		<Container fluid>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						{Object.keys(posts[0]).map((key) => (
							<th key={key}>{key}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{posts.map((post, index) => (
						<tr key={index + 1}>
							<td>{index + 1}</td>
							{Object.values(post).map((value, i) => (
								<td key={i}>{value}</td>
							))}
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};
export default PostsTable;
