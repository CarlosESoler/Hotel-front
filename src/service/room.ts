import axios from "axios";

export interface IRoom {
    id: number,
    number: number,
    description: string,
    status: IRoomStatus,
}

export interface IRoomStatus {
    status: string
}

export interface IRoomType {
    type: string
}

export const getRooms = async (): Promise<IRoom[]> => {
    try {
        const response = await axios.get('http://localhost:8080/hotel/room');
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}