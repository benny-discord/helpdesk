import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

class ActionCard extends Component {
    render () {
        return (
            <div className={styles["action-card"]} style={{ height: "100%" }} onClick={this.props.onClick}>
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
    onClick () {}
}

ActionCard.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default ActionCard