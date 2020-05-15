import React, { Component } from 'react';
import { Map ,TileLayer  } from "react-leaflet";
import './map.css'

export default class ReactMap extends Component {
    render() {
        return (
            <div className="leaflet-container">
                <Map center={[-6.10598555, -38.19364219]} zoom={100}>
                <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 />

                </Map>
            </div>
        )
    }
}
