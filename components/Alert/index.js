import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

class Alert extends Component {
    render() {
        const AlertClasses = classNames({
            [styles["alert"]]: true,
            [styles[this.props.style]]: true
        })

        return (
            <div className={AlertClasses}>
                {this.props.title != undefined &&
                    <h4>
                        {this.props.title}
                    </h4>
                }

                {this.props.children}
            </div>
        )
    }
}

Alert.defaultProps = {
    style: "info"
}

Alert.propTypes = {
    style: PropTypes.oneOf(['info', 'warn', 'destructive', 'success'])
}

export default Alert