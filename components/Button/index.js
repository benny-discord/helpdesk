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
            ...other
        } = this.props

        const ButtonClasses = classNames({
            [styles["button"]]: true,
            [styles[color]]: true
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
    onClick () {}
}

Button.propTypes = {
    color: PropTypes.oneOf(['brand', 'secondary', 'destructive', 'light']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.string
}

export default Button