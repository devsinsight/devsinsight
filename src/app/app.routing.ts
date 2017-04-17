import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AppPageNotFoundComponent } from 'app/page-404';
import { HomeComponent } from 'app/home/home.component';

const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blogs', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'contacts', loadChildren: 'app/contact/contact.module#ContactModule' },
  { path: '**', pathMatch: 'full', component: AppPageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }

