import React, { Component } from "react";
// import GoogleMapReact from 'google-map-react';
// import Marker from 'google-maps-react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {


  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };


  render() {

    return (
      <Map google={this.props.google}
      style={{ height: 600, width: 700}}
      initialCenter={{
        lat: 30.2672,
        lng: -97.7431
      }}
      zoom={13}
      onClick={this.onMapClicked}>
        {this.props.markers[this.props.choice].map(marker => (
          <Marker
            title={marker.title}
            name={marker.name}
            position={marker.position}
            url={marker.url}
            onClick={this.onMapClicked}
            onClick={this.onMarkerClick}
          />
        ))}
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <a href={this.state.selectedPlace.picture}>{this.state.selectedPlace.picture}</a>
              <a href={this.state.selectedPlace.url}>{this.state.selectedPlace.url}</a>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAuyheENMul3n_eUNnx_bKEV7BFrpMaSGE"
})(MapContainer);





//BACKUP MAP
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat: 30.2672,
//       lng: -97.7431
//     },
//     zoom: 15
//   };

//   render() {
//     return (

//       // Important! Always set the container height explicitly
//       <div className="col-8">

//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "API KEY GOES HERE" }}
//           defaultCenter={ {
//             lat: 30.2672,
//             lng: -97.7431
//           }}
//           defaultZoom={15}
//         >
//         <AnyReactComponent
//             lat={30.261653}
//             lng={-97.760059}
//             text="Juliet's"
//           />
//         <AnyReactComponent
//             lat={30.253737}
//             lng={-97.714451}
//             text="Intero"
//         />
//         <AnyReactComponent
//             lat={30.265560}
//             lng={-97.749093}
//             text="Le Politique"
//         />
//         <AnyReactComponent
//             lat={30.265690}
//             lng={-97.744799}
//             text="Red Ash"
//         />

//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;
