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
          <div className="col-4 border" style={{backgroundColor: 'white'}}>
            This is where the list will go
          </div>
        );
      }
    }
     
    export default Restlist;