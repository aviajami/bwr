import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import {Vehicle } from '../../models/vehicle.model';
import tractor from '../../assets/tractor.png';
import drone from '../../assets/drone.png';
import onMissionShd from '../../assets/on-mission.png';
import idleShd from '../../assets/idle.png';
import unreachableShd from '../../assets/unreachable.png';
import { VehicleStatus, VehicleType } from '../../enums';


export const LMarker: React.FC<Vehicle> = ({_id, createdAt, updatedAt, type, status, location }) => {
    let icon = createIcon(status as VehicleStatus, type as VehicleType);

    return (
        <Marker key={_id} icon={icon}
                position={[Number(location.latitude), Number(location.longitude)]}>
            <Popup>
                {_id}  <br/> {status}
            </Popup>
        </Marker>);
};

const createIcon = (status: VehicleStatus, type: VehicleType): L.Icon<L.IconOptions> => {
    return L.icon({
        iconUrl: checkIconUrl(type),
        iconSize: [30,30],
        shadowUrl: checkShadowUrl(status),
        shadowSize: [30, 30],
        shadowAnchor: [4, 40]
    });
}

const checkIconUrl = (type: VehicleType): string => {
    let result = '';
    if (type == VehicleType.tractor) {
        result = tractor;
    } else {
        result = drone;
    }
    return result;
}

const checkShadowUrl = (status: VehicleStatus): string => {
    let result = '';
    if (status == VehicleStatus.onMission) {
        result = onMissionShd;
    } else if (status == VehicleStatus.idle) {
        result = idleShd;
    } else {
        result = unreachableShd;
    }
    return result;

}