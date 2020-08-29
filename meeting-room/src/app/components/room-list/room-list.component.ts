import { Component, OnInit } from '@angular/core';
import { room_details } from 'src/app/models/room_details';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  public roomsList: room_details[] = [
    {
      room_name: "Room 1A",
      room_location: "1st Floor",
      room_capacity: 3,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 1B",
      room_location: "1st Floor",
      room_capacity: 10,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 1C",
      room_location: "1st Floor",
      room_capacity: 20,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 2A",
      room_location: "2nd Floor",
      room_capacity: 3,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 2B",
      room_location: "2nd Floor",
      room_capacity: 10,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 2C",
      room_location: "2nd Floor",
      room_capacity: 20,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 3A",
      room_location: "3rd Floor",
      room_capacity: 3,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 3B",
      room_location: "3rd Floor",
      room_capacity: 10,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 3C",
      room_location: "3rd Floor",
      room_capacity: 20,
      room_status: "Available",
      booking_details: []
    },
    {
      room_name: "Room 4A",
      room_location: "4th Floor",
      room_capacity: 50,
      room_status: "Available",
      booking_details: []
    }
] ;

display_dialog: boolean = false;
roomBookingInfo :room_details;

  constructor() { }

  ngOnInit(): void {
  }

  // booking details
  bookingDetails(res){
  }

  // to book a room
  roomBooking(ele){
    this.roomBookingInfo = ele;
    this.display_dialog = true;
  }

}
