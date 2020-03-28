import Layout from "../components/Layout";
import Map from "../components/Map";
import Dropdown from "../components/Dropdown"

const User = () => (
  <Layout title="register page">
    <div>
      <h1>Welcome to Vegan Gems</h1>

      <form>
        <input placeholder="First Name"></input>
        <br />
        <input placeholder="Last Name"></input>
        <br />
        <input placeholder="Email"></input>


        <Dropdown/>

        <button>Submit</button>
      </form>
    </div>
  </Layout>
);

export default User;
