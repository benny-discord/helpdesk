import AppBar from '../components/_AppBar'
import Alert from '../components/Alert'
import Button from '../components/Button'
import PageToolBar from '../components/PageToolBar'
import { MDXProvider } from '@mdx-js/react'
import '../styles.css'
import 'react-flexbox-grid/dist/react-flexbox-grid.css'

// h

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
    blockquote: props => (
        <blockquote>
            {props.children}
        </blockquote>
    )
}

export default function ({ Component, pageProps }) {
    return (
        <>
            <AppBar />

            <MDXProvider components={components}>
                <Component {...pageProps} />
            </MDXProvider>
        </>
    )
}