import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

const Layout:FC = ({ children }) => (
    <div className='mx-16 pt-4'>
        <Head>
            <title>App Title will go here</title>
        </Head>
        <div>
            <div>
                <ul>
                    {/* <li>
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/playground">
                            <a className="nav-link">Playground</a>
                        </Link>
                    </li> */}
                </ul>
            </div>
            <h1 className='text-3xl font-bold text-blue-600'>App Name</h1>
        </div>
        <main>{children}</main>
    </div>
);

export default Layout;
