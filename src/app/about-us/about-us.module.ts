import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { OurBusinessPrinciplesComponent } from './our-business-principles/our-business-principles.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRouting } from './about-us.routing';

@NgModule({
    imports: [
        CommonModule,
        AboutUsRouting
    ],
    declarations: [
        OurCompanyComponent,
        OurBusinessPrinciplesComponent,
        OurHistoryComponent,
        OurPeopleComponent,
        OurVisionComponent
    ]
})
export class AboutUsModule {

}
