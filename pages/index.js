import Layout from "../components/Layout";
import Map from "../components/Map";
import Restlist from "../components/Restlist";
import React, {useState} from "react"


const Index = props => {

let [values, setValues] = useState({
    all: [
        {
            title:"Juliet's", 
            name:"Juliet's", 
            position:{lat:"30.261653", lng:"-97.760059"},
            url: "http://www.juliet-austin.com/"
        }, 
        {
          title:"Intero",
          name:"Intero",
          position:{lat:"30.253737", lng:"-97.714451"},
          url: "https://www.interorestaurant.com/"
        }, 
        {
          title:"Le Politique",
          name:"Le Politique",
          position:{lat:"30.265560", lng:"-97.749093"},
          url: "https://lepolitiqueaustin.com/"
        },
        {
          title:"Red Ash",
          name:"Red Ash",
          position:{lat:"30.265690", lng:"-97.744799"},
          url: "http://www.redashgrill.com/"
        },
        {
          title:"Flyrite",
          name:"Flyrite",
          position:{lat:"30.261338", lng:"-97.718455"},
          url: "https://www.flyritechicken.com/"
        },
        {
          title:"Koriente",
          name:"Koriente",
          position:{lat:"30.267016", lng:"-97.735982"},
          url: "https://www.koriente.com/"
        },
        {
          title:"El Chilito",
          name:"El Chilito",
          position:{lat:"30.263022", lng:"-97.724423"},
          url: "https://www.elchilito.com/menu-3/"
        },
    ], 
    vegan: [], 
    mixed: []
})

  return <Layout>
    <link
      rel="stylesheet"
      href="https://bootswatch.com/4/journal/bootstrap.min.css"
    />
    <div className="container">
      <h1>Welcome to Vegan Gems</h1>
      <br />
      <button
        id="veganMap"
        type="button"
        className="btn btn-success"
        style={{ marginRight: 40, marginLeft: 20, marginBottom: 5 }}
      >
        Completly Vegan
      </button>
      <button
        id="mixedMap"
        type="button"
        className="btn btn-success"
        style={{ marginBottom: 5 }}
      >
        Mixed
      </button>
    </div>
    <div className="container">
      <div className="row" style={{ height: 600 }}>
        <Restlist />
        <Map markers={values}/>
      </div>
    </div>
  </Layout>
};

export default Index;
