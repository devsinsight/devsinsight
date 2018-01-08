import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger, query} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations:
  [trigger('fade',
    [
      state('fadeIn, void', style({ display: 'block'})),
      state('fadeOut', style({display: 'none'})),
      transition('fadeOut => fadeIn',  [style({ opacity: 0}), animate(500, style({ opacity: 1 }))]),
      transition('fadeIn => fadeOut', [style({ opacity: 1}), animate(500, style({ opacity: 0 }))])
    ])]
})
export class FooterComponent implements OnInit {

  stateExpression: string;
  @ViewChild('footer') footer: ElementRef;

  constructor() { }

  ngOnInit() {
    this.stateExpression = 'fadeOut';
  }

  @HostListener('window:scroll', [])
  scrolling() {

    if (((window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)) > 100) {
      this.stateExpression = 'fadeIn'
    } else {
      this.stateExpression = 'fadeOut'
    }
  }

  backToTop() {

    let handleNumber;

    const scrollToTop = () => {
      const position = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0) - 100;
      scroll(0, position);
      if (position > 0) {
        handleNumber = window.requestAnimationFrame(scrollToTop);
      } else {
        window.cancelAnimationFrame(handleNumber)
      }
    }

    handleNumber = window.requestAnimationFrame(scrollToTop);

  }

}
