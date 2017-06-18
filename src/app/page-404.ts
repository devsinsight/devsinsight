import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-404.html'
})
export class AppPageNotFoundComponent implements OnInit {
    constructor(router: Router) { 
        
    }

    ngOnInit() { }
}