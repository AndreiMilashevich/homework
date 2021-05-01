import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() infoTitle: string;
  @Input() infoText: string;
  @Input() buttonName: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
