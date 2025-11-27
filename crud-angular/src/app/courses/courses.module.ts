import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';



@NgModule({
  declarations: [
    CourseFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
