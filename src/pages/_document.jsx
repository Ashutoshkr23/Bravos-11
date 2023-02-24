import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () => originalRenderPage({
            // Useful for wrapping the whole react tree
            enhanceApp: (App) => App,
            // Useful for wrapping in a per-page basis
            enhanceComponent: (Component) => Component
        })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html lang="en">
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="TACKLING MARKETING ISSUES LIKE IT'S OUR EVERYDAY BUSINESS." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Bravas Digital" />
                <meta property="og:description" content="TACKLING MARKETING ISSUES LIKE IT'S OUR EVERYDAY BUSINESS." />
                <meta property="og:url" content="https://www.bravasdigital.com/" />
                <meta property="og:site_name" content="Bravas Digital: TACKLING MARKETING ISSUES LIKE IT'S OUR EVERYDAY BUSINESS" />
                <meta name="twitter:card" content="summary" />
                <Head/>
               
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument