import { Component, OnInit } from '@angular/core';
import { info } from 'src/app/shared/constants/mockData';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  info = info;

  constructor() { }

  ngOnInit(): void {
  }

}
