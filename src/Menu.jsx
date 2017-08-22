import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<Link to="demo1">Demo 1</Link>
					</li>
					<li>
						<Link to="demo2">Demo 2</Link>
					</li>
					<li>
						<Link to="demo3">Demo 3</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;
