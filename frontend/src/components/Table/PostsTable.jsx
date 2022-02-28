import React, { useMemo } from 'react';
import { Container, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import Pagination from './Pagination';
import GlobalSearch from './GlobalSearch';

const PostsTable = ({ posts }) => {
	const data = posts;
	const columns = useMemo(
		() =>
			Object.keys(posts[0]).map((key) => {
				return { Header: key, accessor: key };
			}),
		[posts]
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
		state: { pageIndex, pageSize, globalFilter },
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
			initialState: {},
		},
		useGlobalFilter,
		usePagination
	);

	return (
		<Container>
			<h3>Posts</h3>
			<Link to="/board" className="float-end">
				Board view
			</Link>
			<GlobalSearch filter={globalFilter} setFilter={setGlobalFilter} />
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
