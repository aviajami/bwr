import React from 'react';
import './LMap.css';
import L from 'leaflet';
import { Map, TileLayer} from 'react-leaflet';
import { useState } from 'react';
import { useEffect } from 'react';
import {Vehicle } from '../../models/vehicle.model';
import {LMarker} from './LMarker';


const serverUrl = 'http://localhost:8081/';

export const LMap: React.FC = () => {
  
    let timer;
    const [zoom, setZoom] = useState(13);
    const [markers, setMarkers] = useState<any>();

    useEffect(() => {
        timer = setTimeout(() => {
            fetch(serverUrl).then(response => response.json()).then((data: Vehicle[]) => {
              console.log('data: ', data);
              let listItems = data.map(dataItem => { return(
                 <LMarker _id={dataItem._id} createdAt={dataItem.createdAt} updatedAt={dataItem.updatedAt}
                          location={dataItem.location} status={dataItem.status} type={dataItem.type} />
              );
              });
                setMarkers(listItems);
            },
            (error) => {
                setMarkers([]);
                console.log(error);
            })
        }, 5000);

        return(() => {timer = null;
        });
    })

    return (
        <Map className="map" center={{
            lat: 35.787449,
            lng: -78.6438197,
          }} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </Map>
    )
};
