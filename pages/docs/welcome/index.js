import ActionCard from '../../../components/ActionCard'
import BackButton from '../../../components/_BackButton'
import Link from 'next/link'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

// CHANGE INFO HERE
const id = "welcome" // due to some problems, this MUST be the same as the folder name
const name = "Welcome!"
const description = "Welcome to your new helpdesk."
// CHANGE INFO HERE

export default function ({ props, categories }) {
    return (
        <div style={{ textAlign: "center", padding: "4%" }}>
            <h1>{name}</h1>

            <p>{description}</p>

            <BackButton text />

            <Grid fluid>
                <Row>
                    {categories.map(c=>{
                        return <Col xs={12} sm={6} md={4}>
                            <Link href={`/docs/${id}/${c.fname}`}>
                                <ActionCard title={c.name}>
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
    const postsDirectory = path.join(process.cwd(), 'pages', 'docs', id)
    const filenames = fs.readdirSync(postsDirectory, { withFileTypes: true })
        .filter(dir => path.resolve(postsDirectory, dir.name).match(/.*\.md$/))
    
    await (async function(){
        for (let i = 0; i < filenames.length; i++) {
            let ux = filenames[i]
    
            import(`./${ux.name}`)
                .then(x => {
                    returned.push({
                        fname: ux.name.replace(".md", ""),
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

export const info = {
    name: name,
    description: description
}