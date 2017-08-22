import React from 'react';
import {
	DiagramWidget,
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DiagramModel,
	DefaultNodeModel,
	DefaultPortModel,
	LinkModel,
	DefaultNodeInstanceFactory,
	DefaultPortInstanceFactory,
	LinkInstanceFactory
} from 'storm-react-diagrams';

import './srd.css';

class DemoSix extends React.Component {
	componentWillMount() {
		this.engine = new DiagramEngine();

		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());

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

		this.engine.setDiagramModel(model);

		//!------------- SERIALIZING ------------------
		const str = JSON.stringify(model.serializeDiagram());

		//!------------- DESERIALIZING ----------------
		//we need this to help the system know what models to create form the JSON
		this.engine.registerInstanceFactory(new DefaultNodeInstanceFactory());
		this.engine.registerInstanceFactory(new DefaultPortInstanceFactory());
		this.engine.registerInstanceFactory(new LinkInstanceFactory());

		//deserialize the model
		var model2 = new DiagramModel();
		model2.deSerializeDiagram(JSON.parse(str), this.engine);
		this.engine.setDiagramModel(model2);
	}
	render() {
		return (
			<div>
				<DiagramWidget diagramEngine={this.engine} />
			</div>
		);
	}
}

export default DemoSix;
