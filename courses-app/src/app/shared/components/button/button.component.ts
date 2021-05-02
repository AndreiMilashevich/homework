import { Component, OnInit, Input } from '@angular/core';
import { faPencilAlt, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() userName: string;
  @Input() buttonName: string;
  @Input() iconName: string;

  trash = faTrashAlt;
  pencil = faPencilAlt;
  times = faTimes;





  constructor() { }

  ngOnInit(): void {
  }

}
