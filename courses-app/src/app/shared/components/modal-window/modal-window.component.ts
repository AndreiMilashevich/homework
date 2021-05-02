import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() buttonOk: string;
  @Input() buttonCancel: string;

  constructor(private headerService: HeaderService) { }

  isModalWindowVisible = this.headerService.isModalWindowVisible;

  ngOnInit(): void { }

  closeByOverlay(event: MouseEvent): void {
    this.headerService.closeModalWindowByOverlay(event);
  }

  closeModalWindow(): void {
    this.headerService.closeModalWindow();
  }

}
