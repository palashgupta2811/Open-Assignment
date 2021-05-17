import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
   public setStickyHeader : boolean = false ;
  ngOnInit(): void {
    window.addEventListener('scroll' ,()=>{
        if(window.scrollY){
          this.setStickyHeader = true ;
        }else{
          this.setStickyHeader = false ;
        }
    })
  }

}
