import Head from 'next/head';
import Navbar from './Navbar';
import Map from './Map';


const Layout = (props) => (
    <div style={{backgroundColor: 'lightgrey'}}>
        <Head>
            <title>Vegan Gems</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/journal/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        
        <div className="container" style={{height: 772 }}>
        {props.children}
        </div>
        
    </div>
);

export default Layout;