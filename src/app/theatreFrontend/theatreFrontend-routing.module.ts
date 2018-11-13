import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheatreRegistrationFormComponent } from './component/theatre-registration-form/theatre-registration-form.component';
import { BodyComponent } from './component/body/body.component';
import { SeatComponent } from './component/seat/seat.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'registrationform',
    component: TheatreRegistrationFormComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheatreRoutingModule { }
