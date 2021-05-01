import { Component, Input, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() creationDate: string;
  @Input() duration: number;
  @Input() authors: string;
  @Input() editable: boolean;

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit(): void {
  }

}
