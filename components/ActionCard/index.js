import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.module.scss'

class ActionCard extends Component {
    render () {
        let classes = classNames({
            [styles["action-card"]]: true,
            [styles["disabled"]]: this.props.disabled
        })

        return (
            <div className={classes} style={{ height: "100%" }} onClick={this.props.onClick}>
                <div className={styles["title"]}>
                    {this.props.title}
                </div>

                <p className={styles["description"]}>
                    {this.props.children}
                </p>
            </div>
        )
    }
}

ActionCard.defaultProps = {
    title: "Container",
    onClick () {},
    disabled: false
}

ActionCard.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default ActionCard