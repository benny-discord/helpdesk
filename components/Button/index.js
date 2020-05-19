import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import PropValidator from '../../utils/Validator'
import styles from './index.module.scss'

class Button extends Component {
    render() {
        const ButtonClasses = classNames({
            [styles["button"]]: true,
            [styles[this.props.color]]: true
        })

        return (
            <button className={ButtonClasses} disabled={this.props.disabled} onClick={this.props.onClick}>
                {this.props.children}
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
    color: PropValidator([
        "brand",
        "secondary",
        "destructive",
        "light"
    ]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button