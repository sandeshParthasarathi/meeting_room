import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FROM_TIME, TO_TIME } from 'src/app/constants/time_constants';
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
    from_time: [null, Validators.required],
    to_time: [null, Validators.required],
    agenda: ['', Validators.required]
  });

  @Input()
  roomBookingInfo: any;

  @Input()
  public display_dialog: boolean;

  @Output()
  display_dialogChange = new EventEmitter<boolean>();


  minDate: Date = new Date();
  fromTimeSpan = FROM_TIME;
  toTimeSpam = TO_TIME;
  isinValid: boolean = true;
  selectedData: string; //yyyy-MM-dd
  formInvalid: boolean = true;
  flagMessage: boolean = false;
  filteredMeeting: any;
  filteredBookedMeeting: any = [];
  bookingdetails: any = [];
  stausMessage: string = '- -'

  ngOnInit(): void {
    this.disableDate();
  }

  // To disable previous date in calender
  disableDate(){
    let currentDate = new Date();
    if(currentDate.getHours() >= 18){
      this.minDate.setDate(currentDate.getDate() + 1)
    }
  }

//close the Modal
  closeModal(){
    this.stausMessage = '- -'
    this.bookingForm.reset();
    this.display_dialog = false;
    this.display_dialogChange.emit(false);
  }


 //validate from and to time
  validateTimeDuration(){
    let fromTime = this.bookingForm.controls.from_time.value;
    let toTime = this.bookingForm.controls.to_time.value;
    if( fromTime == "0.00" || toTime == "0.00" || fromTime == null  || toTime == null || 
        Number(fromTime) >= Number(toTime)){
          this.formInvalid = true;
          this.flagMessage = true;
    }
    else if( fromTime !== "0.00" && toTime !== "0.00" && fromTime !== null  && toTime !== null &&
          Number(fromTime) <= Number(toTime)){
          this.formInvalid = false;
          this.flagMessage = false;
          this.timePassed(Number(fromTime));
    }
  }

//throw error if user select the passed time
  timePassed(fromTime){
    let selectedDate = this.bookingForm.controls.date.value;
    let shortDate: any;
      let currentDate: any = new Date(),
          month = '' + (currentDate.getMonth() + 1),
          day = '' + currentDate.getDate(),
          year = currentDate.getFullYear();

      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;

          shortDate =  [year, month, day].join('-');
      let hour = (currentDate.getHours() + (currentDate.getMinutes()/100)).toFixed(2);

      if(selectedDate === shortDate && (fromTime < hour)){
        this.formInvalid = true;
        this.flagMessage = true;
      }
  }

  statusCheck(){
    this.filteredBookedMeeting = [];
    let fromTime = Number(this.bookingForm.controls.from_time.value);
    let toTime = Number(this.bookingForm.controls.to_time.value);
    if(this.filteredMeeting){
      this.filteredMeeting.forEach(element => {
        if(fromTime >= Number(element.from_time) && fromTime < Number(element.to_time)){
          this.filteredBookedMeeting.push(element);
        }
        if(toTime > Number(element.from_time) && fromTime < Number(element.to_time)){
          this.filteredBookedMeeting.push(element);
        }
      });
    }
    this.uniqueBooking(this.filteredBookedMeeting)
  }

  // filter the unique bookings
  uniqueBooking(array){
    let unique =[...new Set(array.map((item) => item.from_time))] 
      this.bookingdetails = []
      unique.forEach((ele) => {
        let res;
        array.forEach((item) => {
          if(item.from_time == ele){
            res = item;
          }
        })
        this.bookingdetails.push(res);
      })

      //sortin the booking-details
      this.bookingdetails = this.bookingdetails?.sort((a, b) => a.from_time - b.from_time);

      this.stausMessage = this.bookingdetails.length > 0 ? 
                          `${this.bookingdetails.length} meeting scheduled` : "Available"
  }

  // filter the schedule based on selected date
  filterDateSchedule(){
    let selectedDate = this.bookingForm.controls.date.value;
    this.filteredMeeting = this.roomBookingInfo.booking_details.filter((meeting) => meeting.date == selectedDate);
    this.statusCheck();
    this.validateTimeDuration();
  }

//on submit the booking form
  onSubmit(form: FormGroup){
    if(!this.formInvalid){
      form.value.from_time = Number(form.value.from_time).toFixed(2);
      form.value.to_time = Number(form.value.to_time).toFixed(2);
      this.roomBookingInfo.booking_details.push(form.value);
      this.closeModal();
    }
  }

}
