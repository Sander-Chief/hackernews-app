import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Search extends Component {
	componentDidMount() {
		if (this.input) {
			this.input.focus();
		}
	}

	render() {
		const {
			value,
			onChange,
			onSubmit,
			children
		} = this.props;

		return (
			<form onSubmit={onSubmit} >
				<input
					type="text"
					value={value}
					onChange={onChange}
					ref={(node) => { this.input = node; }}
				/>
				<button
					type="submit">
					{children}
				</button>
			</form>
		);
	}
}

Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	children: PropTypes.node,
};

export default Search