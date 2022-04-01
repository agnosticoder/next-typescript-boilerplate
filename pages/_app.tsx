import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className='bg-slate-200'>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}

export default MyApp
