import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRouting } from 'app/blog/blog.routing';
import { BlogComponent } from 'app/blog/blog.component';
import { BlogHeaderComponent } from "app/blog/blog-header/blog-header.component";
import { BlogBodyComponent } from "app/blog/blog-body/blog-body.component";

@NgModule({
  imports: [
    CommonModule,
    BlogRouting
  ],
  declarations: [
    BlogHeaderComponent,
    BlogBodyComponent,
    BlogComponent
    
    ]
})
export class BlogModule { }