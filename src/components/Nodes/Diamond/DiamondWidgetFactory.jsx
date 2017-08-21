import { NodeWidgetFactory, DiagramEngine, NodeModel } from 'storm-react-diagrams';
import { DiamonNodeWidgetFactory } from './DiamondNodeWidget';

export class DiamondWidgetFactory extends NodeWidgetFactory {
	constructor() {
		super('diamond');
	}

	generateReactWidget(diagramEngine: DiagramEngine, node: NodeModel): JSX.Element {
		return DiamonNodeWidgetFactory({ node: node });
	}
}
