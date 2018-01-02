import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
//import 'assets/scripts/main.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe((event) => {
        //$(document).off();
        //$.getScript('assets/scripts/main.js');
      });

      $.getScript('assets/scripts/main.js');
  }
}
