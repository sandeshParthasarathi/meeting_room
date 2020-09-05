import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { ScheduleDetailsComponent } from './components/schedule-details/schedule-details.component';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SearchPipe } from './pipe/search.pipe';

import { MeetingRoomService } from './services/meeting-room.service'

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomBookingComponent,
    ScheduleDetailsComponent,
    MainComponent,
    NavigationComponent,
    FooterComponent,
    ActionBarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [MeetingRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
