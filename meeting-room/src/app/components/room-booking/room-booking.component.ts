import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { TIME_DURATION } from 'src/app/constants/time_constants';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  constructor() { }

  @Input()
  roomBookingInfo: any;

  @Input()
  public display_dialog: boolean;

  @Output()
  display_dialogChange = new EventEmitter<boolean>();

  @ViewChild('fromTime') fromTime: ElementRef;

  minDate: Date = new Date();
  fromTimeSpan = TIME_DURATION;
  toTimeSpam =TIME_DURATION;
  isToTimeDisable: boolean = true;

  ngOnInit(): void {
    console.log(this.minDate)
  }

  closeModal(){
    this.display_dialog = false;
    this.display_dialogChange.emit(false);
  }

  fromTimeSelect(){
    this.isToTimeDisable = false;
  }

  disableTimeValue(){
    return true;
  }

  confirmBook(){
    console.log(this.fromTime)
  }

}
