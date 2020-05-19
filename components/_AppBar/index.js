import React, { Component } from 'react'
import styles from './index.module.scss'
import Button from '../Button'

class AppBar extends Component {
    render() {
        return (
            <div className={styles["appbar"]}>
                <span className={styles["title"]}>
                    Wizard

                    <span className={styles["title-alt"]}>
                        Help
                    </span>
                </span>

                <div className={styles["spacer"]}></div>

                <Button>
                    Dashboard
                </Button>
            </div>
        )
    }
}

export default AppBar