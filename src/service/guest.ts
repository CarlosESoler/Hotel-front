import axios, { AxiosResponse } from "axios";

export interface IGuest {
    id: number;
    rg: string,
    document: string,
    name: string,
    lastName: string,
    motherName: string,
    email: string
    phone: IPhone[]
}

interface IPhone {
    id: number;
    ddd: string,
    number: string
}

export async function getGuestByRg(rg: string): Promise<IGuest> {
    try {
        const response: AxiosResponse<IGuest> = await axios.get(`http://localhost:8080/hotel/guest/${rg}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return {} as IGuest;
    }
}