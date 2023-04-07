export interface Room {
    totalRooms: number;
    avalibleRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    chectoutDate: Date;
}