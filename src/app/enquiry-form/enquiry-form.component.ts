import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms'
import { EnquiryService } from '../service/enquiry.service'
@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent {

  enquiryForm = this.fb.group({
    name:[ "", [ Validators.required ] ],
    email : [ "" , [ Validators.required],[ Validators.email]],
    phone: [ "", [Validators.required] ,[ Validators.minLength(10)] ,[ Validators.maxLength(10)]],
    message: [ "", [Validators.required]]
  })
  constructor(private router:Router,private fb:FormBuilder,private enquiryService:EnquiryService){ }

  enquiry(){
    if(this.enquiryForm.valid==false){
      // console.log(this.enquiryForm.controls.enname.errors);
     alert("Form is invalid");
    }
    else{
      const name = this.enquiryForm.value.name;
      const phone = this.enquiryForm.value.phone;
      const email = this.enquiryForm.value.email;
      const message = this.enquiryForm.value.message;
      // alert(phone);
      this.enquiryService.add(name,phone,email,message);
      this.router.navigateByUrl("/enquirylist")
  }
  
}
}
