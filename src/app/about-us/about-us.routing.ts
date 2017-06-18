import { OurHistoryComponent } from './our-history/our-history.component';
import { OurBusinessPrinciplesComponent } from './our-business-principles/our-business-principles.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: OurCompanyComponent, pathMatch: 'full' },
  { path: 'our-company', component: OurCompanyComponent, pathMatch: 'full' },
  { path: 'our-vision', component: OurVisionComponent, pathMatch: 'full' },
  { path: 'our-people', component: OurPeopleComponent, pathMatch: 'full' },
  { path: 'our-business-principles', component: OurBusinessPrinciplesComponent, pathMatch: 'full' },
  { path: 'our-history', component: OurHistoryComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRouting { }