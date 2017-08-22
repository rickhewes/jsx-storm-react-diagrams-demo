import React from 'react';
import Lodash from 'lodash';
import {
	DiagramWidget,
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DefaultNodeModel,
	DefaultPortModel
} from 'storm-react-diagrams';
import TrayWidget from './components/TrayWidget';
import TrayItemWidget from './components/TrayItemWidget';

import './srd.css';

class DemoFive extends React.Component {
	componentWillMount() {
		this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());
	}
	render() {
		return (
			<div className="content">
				<TrayWidget>
					<TrayItemWidget model={{ type: 'in' }} name="In Node" color="peru" />
					<TrayItemWidget model={{ type: 'out' }} name="Out Node" color="hotpink" />
				</TrayWidget>
				<div
					className="diagram-layer"
					onDrop={event => {
						var data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
						var nodesCount = Lodash.keys(this.engine.getDiagramModel().getNodes()).length;
						var node = null;
						if (data.type === 'in') {
							node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'peru');
							node.addPort(new DefaultPortModel(true, 'in-1', 'In'));
						} else {
							node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'hotpink');
							node.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
						}
						var points = this.engine.getRelativeMousePoint(event);
						node.x = points.x;
						node.y = points.y;
						this.engine.getDiagramModel().addNode(node);
						this.forceUpdate();
					}}
					onDragOver={event => {
						event.preventDefault();
					}}
				>
					<DiagramWidget diagramEngine={this.engine} />
				</div>
			</div>
		);
	}
}
export default DemoFive;
