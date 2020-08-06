import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

class Button extends Component {
	render() {
		const {
			children,
			color,
			disabled,
			hideable,
			...other
		} = this.props;

		const ButtonClasses = classNames({
			[styles["button"]]: true,
			[styles[color]]: true,
			[styles["hideable"]]: hideable,
		})

		return (
			<button className={ButtonClasses} disabled={disabled} {...other}>
				{children}
			</button>
		)
	}
}

Button.defaultProps = {
	color: "brand",
	disabled: false,
	onClick() { },
	hideable: false,
}

Button.propTypes = {
	color: PropTypes.oneOf(['brand', 'secondary', 'destructive', 'light']),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	href: PropTypes.string,
	hideable: PropTypes.bool,
}

export default Button