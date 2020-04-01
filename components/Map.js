import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-maps-react';

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30.2672,
      lng: -97.7431
    },
    zoom: 15
  };
 
  render() {
    return (

      // Important! Always set the container height explicitly
      <div className="col-8">

        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={ {
            lat: 30.2672,
            lng: -97.7431
          }}
          defaultZoom={15}
        >
        <AnyReactComponent
            lat={30.261653}
            lng={-97.760059}
            text="Juliet's"
          />
        <AnyReactComponent
            lat={30.253737}
            lng={-97.714451}
            text="Intero"
        />
        <AnyReactComponent
            lat={30.265560}
            lng={-97.749093}
            text="Le Politique"
        />
        <AnyReactComponent
            lat={30.265690}
            lng={-97.744799}
            text="Red Ash"
        />

        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;