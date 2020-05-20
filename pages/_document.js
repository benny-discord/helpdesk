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
                    <meta name="theme-color" content="#3db588" />
                    <meta name="og:title" content="Wizard Documentation"/>
                    <meta name="og:image" content="https://cdn.discordapp.com/avatars/694822276356374548/39a8d84247034d30c347911e830b569c.png?size=1024" />
                    <meta name="og:site_name" content="Wizard" />
                    <meta name="og:description" content="Documention to get help with Wizard, a bot on Discord." />
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