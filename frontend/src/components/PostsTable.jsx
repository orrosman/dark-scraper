import React, { useMemo } from 'react';
import { Container, Table, ButtonGroup, Button } from 'react-bootstrap';
import { useTable, usePagination } from 'react-table';

const PostsTable = ({ posts }) => {
	const data = posts; //.map((post) => Object.values(post));
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
			<Table striped bordered hover {...getTableProps()} className='mt-1'>
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
			<ButtonGroup>
				<Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					First Page
				</Button>
				<Button onClick={() => previousPage()} disabled={!canPreviousPage}>
					{'<'}
				</Button>
				<Button onClick={() => nextPage()} disabled={!canNextPage}>
					{'>'}
				</Button>
				<Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
					Last Page
				</Button>
			</ButtonGroup>{' '}
			<span>
				Page{' '}
				<strong>
					{pageIndex + 1} of {pageOptions.length}
				</strong>{' '}
			</span>
			<span>
				| Go to page:{' '}
				<input
					type="number"
					defaultValue={pageIndex + 1}
					max={pageCount}
					min={1}
					onChange={(e) => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0;
						gotoPage(page);
					}}
					style={{ width: '100px' }}
				/>
			</span>{' '}
			<select
				value={pageSize}
				onChange={(e) => {
					setPageSize(Number(e.target.value));
				}}
			>
				{[5, 10, 20, 30, 40, 50].map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						Show {pageSize}
					</option>
				))}
			</select>
		</Container>
	);
};
export default PostsTable;
