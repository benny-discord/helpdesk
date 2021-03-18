import CategoryList from '../components/_CategoryList'
import Head from 'next/head'
import { Link, Element } from 'react-scroll'
import Button from '../components/Button'
import styles from '../styles.module.css'

export default function ({ props, categories }) {
    const additions = {
        gettingstarted: [

        ],
        notfound: [
            {
                name: "Support Server",
                color: "brand",
                link: "https://discord.gg/RDeNrrY"
            }
        ]
    }

    return (
        <div style={{ textAlign: "center", padding: "4%" }} >
            <Head>
                <title>Benny Help</title>
            </Head>

            <div className={styles["hero-box"]}>
                <h1 style={{ fontSize: 42 }}>
                    Benny <span style={{ fontWeight: 400 }}>Help</span>
                </h1>
                <p>
                    Your top-level special function and utility bot. <br />
                    Find all the information you need to use Benny.
                </p>
                <div>
                    <Link to="categories" smooth
                        offset={50}
                        duration={500}
                        className="prevDefault"
                    >
                        <Button color="secondary">
                            Help Categories
                        </Button>
                    </Link>
                    <Button color="light" onClick={() => window.location.href = 'https://benny.sh/dashboard'}>
                        Dashboard
                    </Button>
                </div>
            </div>

            {additions.gettingstarted.length != 0 &&
                <CategoryList items={additions.gettingstarted} />
            }

            <Element name="categories">
                <h2>
                    All Categories
                </h2>
            </Element>

            <CategoryList items={categories} />

            <h2>
                Can't find what you're looking for?
            </h2>

            <div>
                {additions.notfound.map((c, i) => (
                    <Button disabled={c.disabled === true} onClick={() => window.location.href = c.link} color={c.color} key={i}>
                        {c.name}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    let returned = []

    const fs = require('fs')
    const path = require('path')
    const postsDirectory = path.join(process.cwd(), 'pages', 'docs')
    const filenames = fs.readdirSync(postsDirectory, { withFileTypes: true })
        .filter(d => d.isDirectory())



    await (async function () {
        for (let i = 0; i < filenames.length; i++) {
            let ux = filenames[i]

            import(`./docs/${ux.name}/index.js`)
                .then(x => {
                    returned.push({
                        fname: ux.name,
                        name: x.info.name,
                        description: x.info.description
                    })
                })
        }
    })()

    return {
        props: {
            categories: returned
        }
    }
}