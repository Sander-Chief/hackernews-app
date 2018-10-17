import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
export const Button = ({
	onClick,
	className,
	children
}) =>
	<button
		onClick={onClick}
		className={className}
		type="button"
	>
		{children}
	</button>

Button.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	className: '',
};

const Loading = () =>
	<FontAwesomeIcon icon={faSpinner} className="fa-spin" />

const withLoading = (Component) => ({ isLoading, ...rest }) =>
	isLoading
		? <Loading />
		: <Component {...rest} />

export const ButtonWithLoading = withLoading(Button);