import { NavbarComponent } from 'app/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AppPageNotFoundComponent } from 'app/page-404';
import { HomeComponent } from 'app/home/home.component';

const router: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: 'about-us', loadChildren: 'app/about-us/about-us.module#AboutUsModule' },
  { path: '404', component: AppPageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }

