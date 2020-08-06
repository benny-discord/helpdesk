import PageList from '../../../components/_PageList'
import BackButton from '../../../components/_BackButton'
import Head from 'next/head'

// CHANGE INFO HERE
const id = "musicquiz" // due to some problems, this MUST be the same as the folder name
const name = "Music Quiz Module"
const description = "A quiz where Benny plays music to your voice channels. Guess the song title and author for points!"
// CHANGE INFO HERE

export default function ({ props, categories }) {
    return (
        <div style={{ textAlign: "center", padding: "4%" }}>
            <Head>
                <title>Benny Help : {name}</title>
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