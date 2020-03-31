import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
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
          bootstrapURLKeys={{ key: "AIzaSyDYz2JjXaniZAsJ0ZPDkUJ4XySzEn0B9vI" }}
          defaultCenter={ {
            lat: 30.2672,
            lng: -97.7431
          }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={30.2672}
            lng={-97.7431}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;