import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  constructor() { }
  @Input('imageSrc') imageSrc : string = '';
  @Input('title') title : string = '';
  @Input('desc') desc : string = '';
  ngOnInit(): void {
  }

}
