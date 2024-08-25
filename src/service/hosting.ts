import { IGuest } from "./guest";
import { IRoom } from "./room";
import  axios from "axios";

export interface IHosting {
    id: number;
    checkIn: string; // ISO 8601 format string
    checkOut: string; // ISO 8601 format string
    guest: IGuest;
    room: IRoom;
    car: null;
}

export async function getHosting(): Promise<IHosting[]> {
    try {
        const response = await axios.get('http://localhost:8080/hotel/hosting/all');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
