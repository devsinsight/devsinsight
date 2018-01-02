import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import * as imagesLoaded from 'imagesloaded';
import * as isotope from 'isotope-layout';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.loadProtafolio();
  }

  loadProtafolio(){
    const itemsGrid = $('#items-grid');
    const fselector = 0;

        let isotopeMode;
        if (itemsGrid.hasClass('masonry')) {
            isotopeMode = 'masonry';
        } else {
            isotopeMode = 'fitRows'
        }

        imagesLoaded('#items-grid', function () {
          const gridIsotope = new isotope('#items-grid', {
            itemSelector: '.mix',
            layoutMode: isotopeMode,
            filter: fselector
        })
      })
  }

}