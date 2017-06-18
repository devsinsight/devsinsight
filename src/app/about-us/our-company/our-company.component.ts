import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'our-company',
    templateUrl: 'our-company.component.html',
    styleUrls: ['our-company.component.scss']
})
export class OurCompanyComponent {
    constructor() {
        console.log("OurCompanyComponent")
    }
}
