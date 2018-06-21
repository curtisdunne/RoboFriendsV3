import React, { Component } from 'react';

class CounterButton extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.count !== nextState.coount) {
			return true;
		}
		return false;
	}

	render() {
		return(
			<button color={this.props.color} onClick={this.updateCount}>
				Count: {this.state.count}
			</button>
		);
	}

	updateCount = () => {
		this.setState(state => {
			return { count: state.count + 1 }
		})
	}
}

export default CounterButton;