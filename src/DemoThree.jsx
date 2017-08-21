import React from 'react';
import {
	DiagramWidget,
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DiagramModel,
	DefaultNodeModel,
	DefaultPortModel,
	LinkModel
} from 'storm-react-diagrams';

import { DiamondNodeModel } from './components/Nodes/Diamond/DiamondNodeModel';
import { DiamondWidgetFactory } from './components/Nodes/Diamond/DiamondWidgetFactory';

import './srd.css';

class DemoThree extends React.Component {
	componentWillMount() {
		//1) setup the diagram engine
		this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());
		this.engine.registerNodeFactory(new DiamondWidgetFactory());

		//2) setup the diagram model
		var model = new DiagramModel();

		//3-A) create a default node
		var node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
		var port1 = node1.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
		node1.x = 100;
		node1.y = 150;

		//3-B) create our new custom node
		var node2 = new DiamondNodeModel();
		node2.x = 400;
		node2.y = 100;

		var node3 = new DefaultNodeModel('Node 3', 'red');
		var port3 = node3.addPort(new DefaultPortModel(true, 'in-1', 'In'));
		node3.x = 800;
		node3.y = 150;

		//3-C) link the 2 nodes together
		var link1 = new LinkModel();
		link1.setSourcePort(port1);
		link1.setTargetPort(node2.ports['left']);

		var link2 = new LinkModel();
		link2.setSourcePort(node2.ports['right']);
		link2.setTargetPort(port3);

		//4) add the models to the root graph
		model.addNode(node1);
		model.addNode(node2);
		model.addNode(node3);
		model.addLink(link1);
		model.addLink(link2);

		//5) load model into engine
		this.engine.setDiagramModel(model);
	}
	render() {
		return (
			<div>
				<DiagramWidget diagramEngine={this.engine} />
			</div>
		);
	}
}

export default DemoThree;
