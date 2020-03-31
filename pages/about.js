import Layout from '../components/Layout';
import Map from '../components/Map'

const About = () => (
    <Layout>
    <div>
        <h1>About Vegan Gems</h1>
        <h3>Vegan Gems is an applicaiton that is designed to assit vegan and non-vegans alike in finding the 
            most unique vegan options Austin has to offer. Many of the popular food-finding
            apps will list major restaurants, with very limited vegan options, as vegan-friendly. These
            restaurants will list items like salads, or mixed vegies as their vegan-friendly options;
            often times that is not what people are looking for.
            </h3>
    </div>
    <Map/>
    </Layout>
);

export default About;