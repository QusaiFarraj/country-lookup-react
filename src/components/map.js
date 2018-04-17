import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    
    const lng = props.lng;
    const lat = props.lat;
    
    return (
        <GoogleMap
            defaultZoom={4}
            center={{ lat: lat, lng: lng}}>
            {props.isMarkerShown && <Marker position={{ lat: lat, lng: lng}} />}
        </GoogleMap>
    );
}));

const MyMap = ({lat, lng}) => {
    
    const API_KEY = 'AIzaSyB6G_GWo7byg3Om3wuQwuJb4ZAiWPFk4R0';
    const mapUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}=&v=3.exp&libraries=geometry,drawing,places`

    return (
        <MyMapComponent
            lat={lat}
            lng={lng}
            isMarkerShown={true}
            googleMapURL={mapUrl}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
};

export default MyMap;
