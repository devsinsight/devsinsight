import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'our-people',
    templateUrl: 'our-people.component.html',
    styleUrls: ['our-people.component.scss']
})
export class OurPeopleComponent {
    constructor() {
        console.log("OurPeopleComponent")
    }
}
