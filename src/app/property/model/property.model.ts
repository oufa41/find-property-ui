import { Photo } from '../model/photo.model';
import { Agent } from '../model/agent.model';
import { Amenities } from '../model/amenities.model';
import { Address } from '../model/address.model';
export class Property {
    address: Address;
    agent: Agent;
    amenities: Amenities;
    id: number;
    numberBathrooms: number;
    numberBedrooms: number;
    photos: Array<Photo>;
    price: number;
    sellingType: SellingType;
    size: number;
    title: string;
}

export enum SellingType {
    SELL,
    RENT
}


