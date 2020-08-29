import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TIME_DURATION } from 'src/app/constants/time_constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // bookingForm: FormGroup;
  bookingForm = this.fb.group({
    user_name: ['', Validators.required],
    date: ['', Validators.required],
    from_time: ['', Validators.required],
    to_time: ['', Validators.required],
    agenda: ['', Validators.required]
  });

  @Input()
  roomBookingInfo: any;

  @Input()
  public display_dialog: boolean;

  @Output()
  display_dialogChange = new EventEmitter<boolean>();


  minDate: Date = new Date();
  fromTimeSpan = TIME_DURATION;
  toTimeSpam =TIME_DURATION;
  isinValid: boolean = true;

  ngOnInit(): void {
  }

//close the Modal
  closeModal(){
    this.bookingForm.reset();
    this.display_dialog = false;
    this.display_dialogChange.emit(false);
  }

//on submit the booking form
  onSubmit(form: FormGroup){
    form.value.from_time = Number(form.value.from_time)
    form.value.to_time = Number(form.value.to_time)
    this.roomBookingInfo.booking_details.push(form.value);
    this.closeModal()
  }

}
