import CategoryList from '../components/_CategoryList'
import Head from 'next/head'
import { Link, Element } from 'react-scroll'
import Button from '../components/Button'
import styles from '../styles.module.css'
import ReactTooltip from "react-tooltip"

export default function ({ props, categories }) {
    const additions = {
        gettingstarted: [
            
        ],
        notfound: [
            {
                name: "Support Server",
                color: "brand",
                link: "https://discord.gg/Sq5feYC"
            },
            {
                name: "Open Helpdesk Channel",
                color: "light",
                link: "/docs/setup/helpdesk"
            }
        ]
    }

    return (
        <div style={{ textAlign: "center", padding: "4%" }} >
            <Head>
                <title>Wizard Help</title>
            </Head>

            <div className={styles["hero-box"]}>
                <h1 style={{ fontSize: 42 }}>
                    Wizard <span style={{ fontWeight: 400 }}>Help</span>
                </h1>
                <p>
                    Your top-level special function and utility bot. <br />
                    Find all the information you need to use Wizard.
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
                    <Button color="light" disabled>
                        Dashboard
                    </Button>
                </div>
            </div>

            {true == false &&
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
                {additions.notfound.map(c=> (
                    <Button disabled={c.disabled === true} onClick={() => window.location.href = c.link} color={c.color}>
                        {c.name}
                    </Button>
                ))}

                <p data-tip="These two options have different purposes. If you have a quick bug report, or need quick help, you can use the helpdesk channel to not have to join the support server. If you think your problem will take a bit, then join our support server." className={styles["muted-a"]} style={{ marginTop: 10 }}>
                    What do I choose?
                </p>

                <ReactTooltip className={styles["tooltip"]} arrowColor="#3db588" fontSize="16" effect="solid" />
            </div>
        </div>
    );
}

export async function getStaticProps () {
    let returned = []

    const fs = require('fs')
    const path = require('path')
    const postsDirectory = path.join(process.cwd(), 'pages', 'docs')
    const filenames = fs.readdirSync(postsDirectory, { withFileTypes: true })
        .filter(d => d.isDirectory())

    
    
    await (async function(){
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