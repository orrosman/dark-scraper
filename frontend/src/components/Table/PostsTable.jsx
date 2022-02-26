import React, { useMemo } from 'react';
import { Container, Table, ButtonGroup, Button } from 'react-bootstrap';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import Pagination from './Pagination';

const PostsTable = ({ posts }) => {
	const data = posts; 
	const columns = useMemo(
		() =>
			Object.keys(posts[0]).map((key) => {
				return { Header: key, accessor: key };
			}),
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: {},
		},
		usePagination
	);

	return (
		<Container>
			<h3>Posts</h3>
			<Table striped bordered hover {...getTableProps()} className="mt-1">
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Pagination
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageOptions={pageOptions}
				pageCount={pageCount}
				gotoPage={gotoPage}
				nextPage={nextPage}
				previousPage={previousPage}
				setPageSize={setPageSize}
				pageIndex={pageIndex}
				pageSize={pageSize}
			/>
		</Container>
	);
};
export default PostsTable;
