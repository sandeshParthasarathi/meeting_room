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
      room_status: null,
      booking_details: [
        {
          agenda: "Sandesh test",
          date: "2020-08-31",
          from_time: "11.00",
          to_time: "13.00",
          user_name: "Sandesh"
        },
        {
          agenda: "test 2",
          date: "2020-08-31",
          from_time: "9.00",
          to_time: "10.00",
          user_name: "sandesh 2"
        },{
          agenda: "daddc",
          date: "2020-08-31",
          from_time: "15.30",
          to_time: "16.00",
          user_name: "Sandesh 3"
        },
        {
          agenda: "test 4",
          date: "2020-09-01",
          from_time: "9.30",
          to_time: "13.00",
          user_name: "Sandesh"
        }
      ]
    },
    {
      room_name: "Room 1B",
      room_location: "1st Floor",
      room_capacity: 10,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 1C",
      room_location: "1st Floor",
      room_capacity: 20,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 2A",
      room_location: "2nd Floor",
      room_capacity: 3,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 2B",
      room_location: "2nd Floor",
      room_capacity: 10,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 2C",
      room_location: "2nd Floor",
      room_capacity: 20,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 3A",
      room_location: "3rd Floor",
      room_capacity: 3,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 3B",
      room_location: "3rd Floor",
      room_capacity: 10,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 3C",
      room_location: "3rd Floor",
      room_capacity: 20,
      room_status: null,
      booking_details: []
    },
    {
      room_name: "Room 4A",
      room_location: "4th Floor",
      room_capacity: 50,
      room_status: null,
      booking_details: []
    }
] ;

display_dialog: boolean = false;
details_dialog: boolean = false;
roomBookingInfo :room_details;
searchFilterValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  // catch the event from search field
  searchedText(data){
    this.searchFilterValue = data
  }

  // booking details
  bookingDetails(res){
    this.roomBookingInfo = res;
    this.details_dialog = true;
  }

  // to book a room
  roomBooking(res){
    this.roomBookingInfo = res;
    this.display_dialog = true;
  }

  // selected date to filter the scheduled meeting
  filterBydate(res){

  }


}
