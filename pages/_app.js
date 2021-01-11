import AppBar from '../components/_AppBar'
import Alert from '../components/Alert'
import Button from '../components/Button'
import PageToolBar from '../components/PageToolBar'
import { MDXProvider } from '@mdx-js/react'
import '../styles.css'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

// import dynamic from 'next/dynamic'

// const DiscordMessage = dynamic( () => import('react-discord-message').then(r=>({DiscordMessage: r.DiscordMessage, DiscordMessages: r.DiscordMessages, Mention: r.Mention})), { ssr: false } )
// console.log(DiscordMessage)
import {DiscordMessages,DiscordEmbed,DiscordMessage,DiscordMention} from '@danktuary/react-discord-message'

const components = {
    wrapper: props => (
        <div style={{ padding: '4%' }}>
            <main {...props} />
        </div>
    ),
    Alert: Alert,
    Button: Button,
    PageToolBar: PageToolBar,
    code: props => (
        <code>
            {props.children}
        </code>
    ),
    inlineCode: props => (
        <pre>
            {props.children}
        </pre>
    ),
    blockquote: props => (
        <blockquote>
            {props.children}
        </blockquote>
    ),
    DiscordMessages: DiscordMessages,
    DiscordMessage: DiscordMessage,
    DiscordEmbed: DiscordEmbed,
    DiscordMention: DiscordMention
}

export default function Load({ Component, pageProps }) {
    return (
        <>
            <AppBar />

            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </>
    )
}