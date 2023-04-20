import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms'

@Component({
  selector: 'hiapp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'wybielak Hotel';
  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    avalibleRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free WiFi, Tv, Bathroom, Kitchen',
        price: 500,
        photos: 'https://apartament-lux-ustron.booked.com.pl/data/Photos/OriginalPhoto/11234/1123431/1123431147/Apartament-Lux-Ustron-Apartment-Exterior.JPEG',
        checkinTime: new Date('11-Nov-2023'),
        chectoutDate: new Date('12-Nov-2023'),
        rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Pro Room',
        amenities: 'Air Conditioner, Free WiFi, Tv, Bathroom, Jacuzzi, Kitchen',
        price: 1000,
        photos: 'https://apartament-lux-ustron.booked.com.pl/data/Photos/OriginalPhoto/11234/1123431/1123431147/Apartament-Lux-Ustron-Apartment-Exterior.JPEG',
        checkinTime: new Date('11-Nov-2023'),
        chectoutDate: new Date('12-Nov-2023'),
        rating: 4.9
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free WiFi, Tv, Bathroom, Kitchen',
        price: 1500,
        photos: 'https://apartament-lux-ustron.booked.com.pl/data/Photos/OriginalPhoto/11234/1123431/1123431147/Apartament-Lux-Ustron-Apartment-Exterior.JPEG',
        checkinTime: new Date('11-Nov-2023'),
        chectoutDate: new Date('12-Nov-2023'),
        rating: 3.4
      },
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }
}
