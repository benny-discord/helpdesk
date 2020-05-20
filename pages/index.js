import CategoryList from '../components/_CategoryList'
import Head from 'next/head'
import ActionCard from '../components/ActionCard'
import Link from 'next/link'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

export default function ({ props, categories }) {
    const additions = {
        gettingstarted: [
            
        ],
        notfound: [
            {
                name: "Support Server",
                description: "Report bugs and request additional support here.",
                link: "/"
            },
            {
                name: "Dashboard",
                description: "Explorer the dashboard and learn the features yourself.",
                link: "/",
                disabled: true
            }
        ]
    }

    return (
        <div style={{ textAlign: "center", padding: "4%" }}>
            <Head>
                <title>Wizard Help</title>
            </Head>

            <h1>Wizard Help</h1>

            <p>Find all the information you need to use Wizard.</p>

            {true == false &&
            <>
            <h2>
                New? Learn these basics.
            </h2>

            <Grid fluid>
                <Row>
                    {additions.gettingstarted.map(c=>{
                        return <Col xs={12} sm={6} md={4} style={{ padding: 8 }}>
                            <Link href={c.link}>
                                <ActionCard title={c.name} style={{ height: "100%" }}>
                                    <p>
                                        {c.description}
                                    </p>
                                </ActionCard>
                            </Link>
                        </Col>
                    })}
                </Row>
            </Grid>
            </>
            }

            <h2>
                All Categories
            </h2>

            <CategoryList items={categories} />

            <h2>
                Can't find what you're looking for?
            </h2>

            <Grid fluid>
                <Row>
                    {additions.notfound.map(c=>{
                        return <Col xs={12} sm={6} md={4} style={{ padding: 8 }}>
                            <Link href={c.link}>
                                <ActionCard disabled={c.disabled == true} title={c.name} style={{ height: "100%" }}>
                                    <p>
                                        {c.description}
                                    </p>
                                </ActionCard>
                            </Link>
                        </Col>
                    })}
                </Row>
            </Grid>
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