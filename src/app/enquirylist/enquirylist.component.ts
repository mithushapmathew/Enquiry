import { Component, OnInit } from '@angular/core';
import {EnquiryService } from '../service/enquiry.service'

@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.css']
})
export class EnquirylistComponent implements OnInit {
history: { name:string, phone:string, email:string, message:string}[]= []
  constructor(private enquiryService:EnquiryService) { 
    this.history =enquiryService.getEnquiries();
  }

  ngOnInit(): void {
  }

}
