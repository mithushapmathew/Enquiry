import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component'
import {EnquirylistComponent } from './enquirylist/enquirylist.component'
const routes: Routes = [
  {path:'', component: EnquiryFormComponent},
  {path:'enquirylist', component: EnquirylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
