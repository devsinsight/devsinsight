import { ContactRouting } from './contact.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from 'app/contact/contact.component';
import { ContactHeaderComponent } from "app/contact/contact-header/contact-header.component";
import { ContactBodyComponent } from 'app/contact/contact-body/contact-body.component';
import { ContactInfoComponent } from "app/contact/contact-info/contact-info.component";
import { ContactFormComponent } from "app/contact/contact-form/contact-form.component";
import { ContactMapComponent } from "app/contact/contact-map/contact-map.component";
import { ContactNewsLetterComponent } from "app/contact/contact-news-letter/contact-news-letter.component";

@NgModule({
  imports: [
    CommonModule,
    ContactRouting
  ],
  declarations: [
    ContactComponent,
    ContactHeaderComponent,
    ContactBodyComponent,
    ContactInfoComponent,
    ContactFormComponent,
    ContactMapComponent,
    ContactNewsLetterComponent,
    ]
})
export class ContactModule { }