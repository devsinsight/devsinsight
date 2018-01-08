import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  router: Router;
  changeMenuHeight = false;
  toggleSearch = false;

  constructor(router: Router) {
    this.router = router;
  }

  @HostListener('window:scroll', [])
  scroll() {
    this.changeMenuHeight = !(navigator.userAgent.match(/iPad|iPhone|Android/i))
            && (((window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)) > 0);
  }

  aboutUsOptions(): void {
    const item = $('.open-sub').closest('li, .box');

    if ($(item).hasClass('active')) {
      $(item).children().last().slideUp(150);
      $(item).removeClass('active');
    } else {
      const li = $('.open-sub').closest('li, .box').parent('ul, .sub-list').children('li, .box');

      if ($(li).is('.active')) {
        $(li).removeClass('active').children('ul').slideUp(150);
      }

      $(item).children().last().slideDown(150);
      $(item).addClass('active');
    }
  }

};
