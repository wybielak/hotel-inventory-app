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

  rooms: Room = {
    totalRooms: 20,
    avalibleRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free WiFi, Tv, Bathroom, Kitchen',
    price: 500,
    photos: 'https://apartament-lux-ustron.booked.com.pl/data/Photos/OriginalPhoto/11234/1123431/1123431147/Apartament-Lux-Ustron-Apartment-Exterior.JPEG',
    checkinTime: new Date('11-Nov-2023'),
    chectoutDate: new Date('12-Nov-2023')
  },
  {
    roomType: 'Deluxe Pro Room',
    amenities: 'Air Conditioner, Free WiFi, Tv, Bathroom, Jacuzzi, Kitchen',
    price: 1000,
    photos: 'https://apartament-lux-ustron.booked.com.pl/data/Photos/OriginalPhoto/11234/1123431/1123431147/Apartament-Lux-Ustron-Apartment-Exterior.JPEG',
    checkinTime: new Date('11-Nov-2023'),
    chectoutDate: new Date('12-Nov-2023')
  },
  {
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free WiFi, Tv, Bathroom, Kitchen',
    price: 1500,
    photos: 'https://apartament-lux-ustron.booked.com.pl/data/Photos/OriginalPhoto/11234/1123431/1123431147/Apartament-Lux-Ustron-Apartment-Exterior.JPEG',
    checkinTime: new Date('11-Nov-2023'),
    chectoutDate: new Date('12-Nov-2023')
  },
]

  constructor() { }

  ngOnInit(): void {

  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
