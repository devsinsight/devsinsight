import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRouting } from 'app/blog/blog.routing';
import { BlogComponent } from 'app/blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRouting
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }