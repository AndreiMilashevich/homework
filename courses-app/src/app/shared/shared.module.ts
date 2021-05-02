import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { JoinPipe } from './pipes/join.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent, ButtonComponent, InfoComponent, SearchComponent } from './components/index';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';

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
    ModalWindowComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
