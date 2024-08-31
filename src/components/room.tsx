import React, { useState, useEffect } from 'react';
import { getRooms, IRoom } from '../service/room';
import { RenderLoading } from '../pages/home/renderLoading';

export default function RenderRooms() {
    const [isLoading, setIsLoading] = useState(true);
    const [rooms, setRooms] = useState<IRoom[]>([]);

    const loadRooms = async () => {
        try {
            const fetchedRooms: IRoom[] = await getRooms();
            console.log(fetchedRooms);
            setRooms(fetchedRooms);
        } catch (error) {
            console.error("Failed to load rooms", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadRooms();
    }, []); // O array vazio como segundo argumento garante que useEffect seja executado apenas uma vez

    if (isLoading) {
        return <RenderLoading isLoading={isLoading} />;
    }

    return (
        <div>
            {rooms.map(room => (
                <div key={room.id}>
                    <h2>{room.number}</h2>
                    <p>{room.description}</p>
                    <p>{room.status.status}</p>
                </div>
            ))}
        </div>
    );
}
