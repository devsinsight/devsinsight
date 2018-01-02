import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [];
  currIndex = 0;
  @ViewChild('slider') slider: OwlCarousel;

  constructor() {}

   ngOnInit(): void {
    this.images = [
      'assets/images/revo-slider/terka.jpg',
      'assets/images/revo-slider/face-side.jpg',
      'assets/images/revo-slider/city-grey.jpg'
    ];

  }

  next() {
    this.slider.next([200]);
  }

  prev(){
    this.slider.previous([200]);
  }


}
