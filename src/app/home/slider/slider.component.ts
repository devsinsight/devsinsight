import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit() {
     setTimeout(function(){ this.show = true; }.bind(this), 1000 );
  }

}