import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapTextStyle from '../styles/MapTextStyle';

const MapText = ({ text }) => <MapTextStyle>{text}</MapTextStyle>;

export default function GoogleMap({
  defaultProps = {
    center: {
      lat: 60,
      lng: 30,
    },
    zoom: 11,
  },
}) {
  console.log('test');
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapText lat={60} lng={30} text="Here I am" />
      </GoogleMapReact>
    </div>
  );
}
