import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
    enquiries:{name:string, phone:string, email:string,message:string }[] =[];
  constructor() { }




add =(name:string, phone:string, email:string, message:string)=>{
   alert(message);
 this.enquiries.push({
   name, email,phone,message
 })
}
getEnquiries=  () => {
  return this.enquiries;
}
}
