// components/Layout.js
import Head from 'next/head';
import NavSwitch from './NavSwitch';

const Layout = ({ children, title = 'CSP MFE' }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>{title}</title>
            </Head>


            <main className='min-h-screen'>
                <NavSwitch />
                {children}
                <footer >
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                        © {new Date().getFullYear()} Evernorth
                    </div>
                </footer>
            </main>


        </div>
    );
};

export default Layout;