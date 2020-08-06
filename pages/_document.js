import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="theme-color" content="#40c9dd" />
                    <meta name="og:title" content="Benny Documentation"/>
                    <meta name="og:image" content="/icon.png" />
                    <meta name="og:site_name" content="Benny" />
                    <meta name="og:description" content="Documention to get help with Benny, a bot on Discord." />
                    <link rel="icon" href="/icon.png" />
                </Head>
                
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument