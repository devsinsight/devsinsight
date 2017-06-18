import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'our-history',
    templateUrl: 'our-history.component.html',
    styleUrls: ['our-history.component.scss']
})
export class OurHistoryComponent {
    constructor() {
        console.log("OurHistoryComponent")
    }
}
