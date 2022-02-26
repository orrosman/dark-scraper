import { ButtonGroup, Button } from 'react-bootstrap';

const Pagination = (props) => {
	const {
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		setPageSize,
		pageIndex,
		pageSize,
	} = props;
	return (
		<>
			<ButtonGroup>
				<Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
					First Page
				</Button>
				<Button onClick={() => gotoPage()} disabled={!canPreviousPage}>
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
		</>
	);
};

export default Pagination;
