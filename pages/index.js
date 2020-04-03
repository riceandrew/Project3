import Layout from "../components/Layout";
import Map from "../components/Map";
import Restlist from "../components/Restlist";
import React, {useState} from "react"


const Index = props => {
const [choice, setChoice] = useState("all")

const values=({
    all: [
        {
            title:"Juliet's", 
            name:"Juliet's", 
            position:{lat:"30.261653", lng:"-97.760059"},
            img: <div><img src></img></div>,
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
        {
          title:"Barton Creol",
          name:"Barton Creol",
          position:{lat:"30.265084", lng:"-97.731573"},
          url: "http://www.batoncreole.com/menu/"
        },
        {
          title:"The Parlor",
          name:"The Parlor",
          position:{lat:"30.308761", lng:"-97.734115"},
          url: "https://www.theparloraustin.com/"
        },
        {
          title:"Via 313",
          name:"Via 313",
          position:{lat:"30.297858", lng:"-97.741457"},
          url: "http://via313.com/menu"
        }
    ], 
    vegan: [
      {
        title:"Mr.Natural",
        name:"Mr.Natural", 
        position:{lat:"30.256824", lng:"-97.724522"},
        url: "https://www.mrnatural-austin.com/"
      }, 
      {
        title:"Counter Culture",
        name:"Counter Culture", 
        position:{lat:"30.254679", lng:"-97.717912"},
        url: "http://countercultureaustin.com/"
      },
      {
        title:"Vegan Nom",
        name:"Vegan Nom", 
        position:{lat:"30.255139", lng:"-97.718182"},
        url: "https://www.thevegannom.com/"
      },
      {
        title:"Bouldin Creek Cafe",
        name:"Bouldin Creek Cafe", 
        position:{lat:"30.246495", lng:"-97.756786"},
        url: "http://bouldincreekcafe.com/"
      },
      {
        title:"Mother's Cafe",
        name:"Mother's Cafe", 
        position:{lat:"30.304367", lng:"-97.725968"},
        url: "http://bouldincreekcafe.com/"
      },
      {
        title:"Citizen's Eatery",
        name:"Citizen's Eatery", 
        position:{lat:"30.321724", lng:"-97.739028"},
        url: "https://www.citizeneatery.com/"
      },
      {
        title:"Conscious Cravings",
        name:"Conscious Cravings", 
        position:{lat:"30.250725", lng:"-97.754297"},
        url: "https://www.consciouscravingsaustin.com/"
      },
      {
        title:"Arlo's",
        name:"Arlo's", 
        position:{lat:"30.269616", lng:"-97.736356"},
        url: "https://www.arloscurbside.com/"
      },
      {
        title:"The Beer Plant",
        name:"The Beer Plant", 
        position:{lat:"30.296630", lng:"-97.767746"},
        url: "http://thebeerplant.com/"
      },  
      {
        title:"Concious Cravings",
        name:"Concious Cravings", 
        position:{lat:"30.296851", lng:"-97.707497"},
        url: "https://www.consciouscravingsaustin.com/menu"
      },
      {
        title:"Rebel Cheese",
        name:"Rebel Cheese", 
        position:{lat:"30.301637", lng:"-97.703127"},
        url: "https://www.rebelcheese.com/"
      },    
    ]
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
        onClick={()=>setChoice("vegan")}
        style={{ marginRight: 40, marginLeft: 20, marginBottom: 5 }}
      >
        Completly Vegan
      </button>
      <button
        id="mixedMap"
        type="button"
        className="btn btn-success"
        onClick={()=>setChoice("all")}
        style={{ marginBottom: 5 }}
      >
        Mixed
      </button>
    </div>
    <div className="container">
      <div className="row" style={{ height: 600 }}>
        <Restlist />
        <Map markers={values} choice={choice}/>
      </div>
    </div>
  </Layout>
};

export default Index;
