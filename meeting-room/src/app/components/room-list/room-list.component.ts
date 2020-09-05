import { Component, OnInit } from '@angular/core';
import { room_details } from 'src/app/models/room_details';
import { MeetingRoomService } from '../../services/meeting-room.service'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  // mock-data
public roomsList: room_details;

display_dialog: boolean = false;
details_dialog: boolean = false;
roomBookingInfo :room_details;
searchFilterValue: string;

  constructor(
    private meetingRoomService: MeetingRoomService
  ) { }

  ngOnInit() {
    this.getMeetingRoomData();
  }

  getMeetingRoomData(){
    this.meetingRoomService.getMeetingRoomList().subscribe((res) => {
      this.roomsList = res;
    },
    error => {

    })
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
