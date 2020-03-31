import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

import Map from '../components/Map'

import Restlist from '../components/Restlist'

const Index = (props) => (
 
        <Layout>
          <link rel="stylesheet"
            href="https://bootswatch.com/4/journal/bootstrap.min.css"/>
    <div className="container">
        <h1>Welcome to Vegan Gems</h1>
        <br/>
        <button id="veganMap" type="button" class="btn btn-success" style={{marginRight:40, marginLeft:20, marginBottom:5}}>Completly Vegan</button>
        <button id="mixedMap" type="button" class="btn btn-success" style={{marginBottom:5}}>Mixed</button>
    </div>
    <div className="container">
<div className="row" style={{height: 600}} >
    <Restlist/>
    <Map/>
    
    </div>
    </div>
    </Layout>
);



export default Index;