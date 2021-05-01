import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from '../../constants/mockData';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  coursesData =  mockedCourseList;

  constructor() { }

  ngOnInit(): void {
    console.log(this.coursesData);
  }

}
