import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnquirylistComponent } from './enquirylist/enquirylist.component';
@NgModule({
  declarations: [
    AppComponent,
    EnquiryFormComponent,
    EnquirylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
