import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';

const routes: Routes = [
  {path:"clientForm", component:ClientFormComponent},
  {path:"meetingForm", component:MeetingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
