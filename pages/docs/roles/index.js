import PageList from '../../../components/_PageList'
import BackButton from '../../../components/_BackButton'
import Head from 'next/head'

// CHANGE INFO HERE
const id = "roles" // due to some problems, this MUST be the same as the folder name
const name = "Roles & Role Groups"
const description = "Role utilies as well as be able to give or remove a set of roles when a user receives a role."
// CHANGE INFO HERE

export default function ({ props, categories }) {
    return (
        <div style={{ textAlign: "center", padding: "4%" }}>
            <Head>
                <title>Wizard Help : Roles</title>
            </Head>

            <h1>{name}</h1>

            <p>{description}</p>

            <BackButton text />

            <PageList id={id} items={categories} />
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