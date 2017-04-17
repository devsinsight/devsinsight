import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonService } from 'app/core/services/common.service';

import { AppComponent } from './app.component';
import { HomeComponent } from 'app/home/home.component';
import { NavbarComponent } from 'app/navbar/navbar.component';
import { FooterComponent } from 'app/footer/footer.component';
import { SliderComponent } from 'app/home/slider/slider.component';
import { TestimonialComponent } from 'app/home/testimonial/testimonial.component';
import { AboutUsComponent } from 'app/home/about-us/about-us.component';
import { AdsComponent } from 'app/home/ads/ads.component';
import { BlogComponent } from 'app/home/blog/blog.component';
import { ClientComponent } from 'app/home/client/client.component';
import { ContactInfoComponent } from 'app/home/contact-info/contact-info.component';
import { CounterComponent } from 'app/home/counter/counter.component';
import { FeatureComponent } from 'app/home/feature/feature.component';
import { LetterComponent } from 'app/home/letter/letter.component';
import { MapComponent } from 'app/home/map/map.component';
import { PortfolioComponent } from 'app/home/portfolio/portfolio.component';
import { ServiceComponent } from 'app/home/service/service.component';
import { WorkProcessComponent } from 'app/home/work-process/work-process.component';

import { AppPageNotFoundComponent } from 'app/page-404';
import { AppRouting } from 'app/app.routing';
import 'app/rxjs-extensions';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AppPageNotFoundComponent,
    FooterComponent,
    SliderComponent,
    TestimonialComponent,
    AboutUsComponent,
    AdsComponent,
    BlogComponent,
    ClientComponent,
    ContactInfoComponent,
    CounterComponent,
    FeatureComponent,
    MapComponent,
    PortfolioComponent,
    ServiceComponent,
    WorkProcessComponent,
    LetterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
