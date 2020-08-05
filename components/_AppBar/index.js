import React, { Component } from 'react'
import styles from './index.module.scss'
import Button from '../NButton'
import Link from 'next/link'

class AppBar extends Component {
    render() {
        return (
            <div className={styles["appbar"]}>
                <Link href="/">
                    <span className={styles["title"]}>
                        Benny

                        <span className={styles["title-alt"]}>
                            Help
                        </span>
                    </span>
                </Link>

                <div className={styles["spacer"]}></div>

                <Button disabled>
                    Dashboard
                </Button>
            </div>
        )
    }
}

export default AppBar