import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false
		}
	}

	render() {
		if (this.state.hasError) {
			return (
				<h1>Oooops. That is not good</h1>
			);
		}

		return this.props.children
	}

	componentDidCatch() {
		this.setState({ hasError: true })
	}
}

export default ErrorBoundry;
