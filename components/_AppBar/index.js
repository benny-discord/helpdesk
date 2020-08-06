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

                <Button color="light" onClick={() => window.location.href = 'https://bennybot.dev/dashboard'}>
					Dashboard
                </Button>
				<Button color="destructive" hideable={true} onClick={() => window.open('https://github.com/BennyDiscord/benny-helpdesk', undefined, "noreferrer")}>
					Contribute
                </Button>
            </div>
        )
    }
}

export default AppBar