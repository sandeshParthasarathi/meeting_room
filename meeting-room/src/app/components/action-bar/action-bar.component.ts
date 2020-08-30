import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  constructor() { }

  @Output()
  public searchedText = new EventEmitter<string>();

  @Output()
  public selectedDateValue = new EventEmitter<string>();

  search_filter: string;
  minDate: Date = new Date();
  todayDate: Date = new Date();

  ngOnInit(): void {
  }

  //to search the room by name
  filterRoom(res){
    this.searchedText.emit(res)
  }

  // to clear the search field
  clearText(res){
    this.search_filter = '';
    this.searchedText.emit(this.search_filter);
  }

  //selected calender date
  selectedDate(res){
    this.selectedDateValue.emit(res);
  }

}
