import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss']
})
export class InfoItemComponent implements OnInit {

  @Input() infoTitle: string;
  @Input() infoText: string;
  @Input() buttonName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
