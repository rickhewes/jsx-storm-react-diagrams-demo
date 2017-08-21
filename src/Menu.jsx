import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to={`/demo1`}>Demo 1</Link>
					</li>
					<li>
						<Link to={`/demo2`}>Demo 2</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;
