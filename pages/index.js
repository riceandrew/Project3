import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

import Map from '../components/Map'

import Restlist from '../components/Restlist'

const Index = (props) => (
    <Layout>
    <div>
        <h1>Welcome to Vegan Gems</h1>
    </div>
    <div>
    <Restlist/>
    <Map/>
    </div>
    </Layout>
);



export default Index;