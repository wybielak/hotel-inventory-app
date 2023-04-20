export interface Room {
    totalRooms: number;
    avalibleRooms: number;
    bookedRooms: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    chectoutDate: Date;
    rating: number;
}