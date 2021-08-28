import React from 'react';
import PText from './PText';
import MapStyle from '../styles/MapStyle';

export default function Map() {
  return (
    <MapStyle>
      <div className="container">
        <div className="map_card">
          <h3 className="map_card_heading">Found me!</h3>
          <PText>KTH, Stockholm, Sweden</PText>
          <a
            href="https://www.google.se/maps/place/KTH+Royal+Institute+of+Technology/@59.3498733,18.0680679,17z/data=!3m1!4b1!4m5!3m4!1s0x465f779d96ed48cb:0xb1366ae00b879b4a!8m2!3d59.3498706!4d18.0702566"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyle>
  );
}
