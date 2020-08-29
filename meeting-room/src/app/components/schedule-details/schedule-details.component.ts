import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {

  constructor() { }

  @Input()
  roomBookingInfo: any;

  @Input()
  public details_dialog: boolean;

  @Output()
  details_dialogChange = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  //close the Modal
  closeModal(){
    this.details_dialog = false;
    this.details_dialogChange.emit(false);
  }

  // to delete the meeting
  deleteMeeting(res, i){
    // since we don't have unique ID's for meeting i'm using index to remove the meeting
    this.roomBookingInfo.booking_details.splice(i, 1)
  }

}
