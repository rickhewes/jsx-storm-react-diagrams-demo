import React from 'react';

export interface TrayWidgetProps {}

export interface TrayWidgetState {}

export default class TrayWidget extends React.Component<TrayWidgetProps, TrayWidgetState> {
	constructor(props: TrayWidgetProps) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="tray">
				{this.props.children}
			</div>
		);
	}
}

TrayWidget.defaultProps = {};
