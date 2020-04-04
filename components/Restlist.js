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
          <div class="form-group">
          <select multiple="5" class="form-control" id="exampleSelect2" style={{height: 600, width: 340, backgroundColor: 'lightgrey'}}>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
            <option style={{height:90, backgroundColor: 'black' }}>Insert Name</option>
          </select>
        </div>
        );
      }
    }
     
    export default Restlist;