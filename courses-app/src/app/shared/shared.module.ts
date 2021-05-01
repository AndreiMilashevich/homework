import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { JoinPipe } from './pipes/join.pipe';
import { DurationPipe } from './pipes/duration.pipe';

import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent, InfoItemComponent } from './components/index';

const components = [
  InfoItemComponent,
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
