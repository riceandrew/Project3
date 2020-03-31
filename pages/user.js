import Layout from "../components/Layout";
import Map from "../components/Map";
import Dropdown from "../components/Dropdown"

const User = () => (
  <Layout title="register page">
    <div>
      <h1>Welcome to Vegan Gems</h1>

      <form>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"></input>
        <br />
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"></input>
        <br />
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>


        <Dropdown/>

        <button type="button" className="btn btn-primary btn-lg" style={{marginTop:15}}>Submit</button>
      </form>
    </div>
  </Layout>
);

export default User;
