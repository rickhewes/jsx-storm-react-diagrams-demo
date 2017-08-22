import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<div>
				<h1>Live Demos of Storm React Diagrams</h1>
				<p>
					The original library can be found <a href="https://github.com/projectstorm/react-diagrams">here</a>.
				</p>
				<ul>
					<li>
						<Link to="demo1">Demo 1</Link> - Default nodes
					</li>
					<li>
						<Link to="demo2">Demo 2</Link> - Check performance
					</li>
					<li>
						<Link to="demo3">Demo 3</Link> - User defined nodes
					</li>
					<li>
						<Link to="demo4">Demo 4</Link> - Read only diagram
					</li>
					<li>
						<Link to="demo5">Demo 5</Link> - Drag and drop
					</li>
					<li>
						<Link to="demo6">Demo 6</Link> - Serialise & Deserialise
					</li>
					<li>
						<Link to="demo7">Demo 7</Link> - Snap to grid
					</li>
				</ul>
			</div>
		);
	}
}

export default Menu;
