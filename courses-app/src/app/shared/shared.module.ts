import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent,  } from './components/index';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { JoinPipe } from './pipes/join.pipe';
import { DurationPipe } from './pipes/duration.pipe';


const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  CourseListComponent
];

const customPipes = [
  JoinPipe,
  DurationPipe
];

@NgModule({
  declarations: [
    ...components,
    ...customPipes,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
