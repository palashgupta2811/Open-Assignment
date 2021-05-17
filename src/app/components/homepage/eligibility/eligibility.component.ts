import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  constructor() { }
 public selectedMonthlyIncome : number = 0;
 public selectedMonthlyExpense : number = 0;
  ngOnInit(): void {
  }
  change(e:any,type ?:any){
   type ?  this.selectedMonthlyExpense = e.target.value :this.selectedMonthlyIncome = e.target.value;
  }
  changeFormat(value:any){
    let x=value.toString();
    let lastThree = x.substring(x.length-3);
    let otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res ;
  }
  returnWidth(val:any,total:any){
    if(parseInt(val)/parseInt(total) * 100 > 70 ){
      return parseInt(val)/parseInt(total) * 100 - 3 ;
    }
    if(parseInt(val)/parseInt(total) * 100 < 30){
      return parseInt(val)/parseInt(total) * 100 + 3 ;
    }
    return parseInt(val)/parseInt(total) * 100 ;
  }
}
