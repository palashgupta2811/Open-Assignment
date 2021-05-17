import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {

  constructor() { }
  public displayCard = [{
    url:'../../../../assets/Get\ Paid\ Instantly.png',desc:'Zero EMI on back to business loans of upto 1 lakh',title:'Quick cash disbursement'
  },{
    url:'../../../assets/freelancer_feature_icon_6@1.5x.png',desc:'Manage banking accounting and everything in between on one platform',title:'Ace your business finances'
  },{
    url:'../../../../assets/Secure \Payments.png',desc:'Get started instantly by submitting only your basic details and bank statements',title:'Zero Paperwork'
  },{
    url:'../../../assets/Covid.png',desc:'Zero EMI on back to business loans of upto 1 lakh',title:'Learn to fight COVID-19'
  },{
    url:'../../../../assets/Low\ interest\ rate.png',desc:'Achieve your financial goals with an amazing interest rate at 13% per annum',title:'Low interest Rate'
  }]
  ngOnInit(): void {

  }

}
