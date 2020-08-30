import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    { path: '', redirectTo: 'meeting-room', pathMatch: 'full' },
    { path: 'meeting-room', component:  MainComponent},
    { path: '**', redirectTo: 'meeting-room', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes
      )],

    exports: [RouterModule]
})
export class RoutingModule {}
