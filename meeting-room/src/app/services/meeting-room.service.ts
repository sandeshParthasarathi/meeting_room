import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { room_details } from '../models/room_details';

@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  constructor(
    private http: HttpClient,
  ) { }

  //calling data from mock-json
  getMeetingRoomList(): Observable<room_details>{
    return this.http.get(`../../assets/mock.json`);
  }
}
