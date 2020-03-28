import Head from 'next/head';
import Navbar from './Navbar';
import Map from './Map';


const Layout = (props) => (
    <div>
        <Head>
            <title>Vegan Gems</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        
        <div className="container">
        {props.children}
        </div>
        
    </div>
);

export default Layout;