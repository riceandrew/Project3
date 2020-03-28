import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Restlist extends Component {

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
          <div style={{ height: '80vh', marginRight: '650px', paddingTop: '100px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
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
     
    export default Restlist;