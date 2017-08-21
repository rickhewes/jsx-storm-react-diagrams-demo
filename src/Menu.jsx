import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<List>
					<ListItem button component="a" href="/demo1">
						<ListItemText primary="Demo 1" />
					</ListItem>
					<ListItem button component="a" href="/demo2">
						<ListItemText primary="Demo 2" />
					</ListItem>
				</List>
			</div>
		);
	}
}

export default Menu;
