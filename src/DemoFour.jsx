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

import './srd.css';

class DemoFour extends React.Component {
	componentWillMount() {
		let engine = new DiagramEngine();

		engine.registerNodeFactory(new DefaultNodeFactory());
		engine.registerLinkFactory(new DefaultLinkFactory());

		const model = new DiagramModel();

		const node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
		const port1 = node1.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
		node1.x = 100;
		node1.y = 100;

		const node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
		const port2 = node2.addPort(new DefaultPortModel(true, 'in-1', 'IN'));
		node2.x = 400;
		node2.y = 100;

		const link1 = new LinkModel();
		link1.setSourcePort(port1);
		link1.setTargetPort(port2);

		model.addNode(node1);
		model.addNode(node2);
		model.addLink(link1);

		engine.setDiagramModel(model);

		model.setLocked(true);
		this.props = {
			diagramEngine: engine,
			allowLooseLinks: false,
			allowCanvasTranslation: false,
			allowCanvasZoom: false
		};
	}
	render() {
		return (
			<div>
				<DiagramWidget {...this.props} />
			</div>
		);
	}
}

export default DemoFour;
