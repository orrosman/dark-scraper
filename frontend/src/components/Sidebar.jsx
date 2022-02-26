import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<Nav
			className="col-md-1 d-none d-md-block bg-light sidebar"
			activeKey="/home"
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
		>
			<Nav.Item>
				<Link to="/">Table</Link>
			</Nav.Item>

			<Nav.Item>
				<Link to="/board">Grid</Link>
			</Nav.Item>
		</Nav>
	);
};
export default Sidebar;
