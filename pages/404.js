import CategoryList from '../components/_CategoryList'
import Head from 'next/head'
import { Link, Element } from 'react-scroll'
import Button from '../components/Button'
import styles from '../styles.module.css'

export default function () {
    return (
        <div style={{ textAlign: "center", padding: "4%" }} >
            <Head>
                <title>Benny Helpdesk - 404</title>
            </Head>

            <div className={styles["hero-box"]}>
                <h1 style={{ fontSize: 42 }}>
                    <span style={{ fontWeight: 400 }}>You seem lost</span>
                </h1>
                <p>
                    Perhaps you aren't lost.<br />
                    Either way, there's nothing here
                </p>

                <Button color="secondary" onClick={()=>window.history.back(1)}>Go back</Button>
                <Button color="destructive" onClick={()=>window.location.href = '/'}>Home Page</Button>
                <Button color="light" onClick={() => window.location.href = 'https://discord.gg/RDeNrrY'}>
                    Support Server
                </Button>
            </div>
        </div>
    );
}