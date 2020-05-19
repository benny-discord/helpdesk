import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import BackButton from '../_BackButton'
import { withRouter } from 'next/router'

class PageToolBar extends Component {
    back() {
        this.router.back()
    }

    render() {
        return (
            <div className={styles["appbar"]}>
                <BackButton />

                <span className={styles["title"]}>
                    {this.props.title}
                </span>
            </div>
        )
    }
}

PageToolBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default withRouter(PageToolBar)