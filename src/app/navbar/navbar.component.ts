import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  router: Router;
  @ViewChild('mainMenu') mainMenu: ElementRef;
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    const body = $('body');
    const primary = '#main-menu';
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

  aboutUs(): void {
    const body = $('body');
    const primary = '#main-menu';

    if ((body.width() > 979) && (navigator.userAgent.match(/iPad|iPhone|Android/i))) {
      const link = $(this);

      if (link.parent().hasClass('open')) {
        event.preventDefault();
        link.parent().removeClass('open');
      } else {
        event.preventDefault();
        link.parent().addClass('open');
      }
    }
  }
};
