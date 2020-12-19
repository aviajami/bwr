import { Location } from './types.model';

export class Vehicle {
    
    _id: string;
    type: 'tractor' | 'drone';
    createdAt: Date;
    updatedAt: Date;
    status: 'unreachable' | 'idle' | 'on-mission';
    location: Location;
}