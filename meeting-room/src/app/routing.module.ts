import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MEETING_ROOM } from './constants/route_constants';

const routes: Routes = [
    { path: '', redirectTo: MEETING_ROOM, pathMatch: 'full' },
    { path: MEETING_ROOM, component:  MainComponent},
    { path: '**', redirectTo: MEETING_ROOM, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes
      )],

    exports: [RouterModule]
})
export class RoutingModule {}
