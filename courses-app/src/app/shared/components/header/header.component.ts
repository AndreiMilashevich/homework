import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { MODAL_WINDOW_CONFIG } from '../../constants/mockData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modalWindowData = this.headerService.modalWindowData;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void { }

  getModalWindowState(): boolean {
    return this.headerService.isModalWindowVisible;
  }

  openModalWindow(): void {
    this.headerService.openModalWindow();
  }

  closeModalWindow(): void {
    this.headerService.closeModalWindow();
  }

  closeModalWindowByOverlay(event: MouseEvent): void {
    this.headerService.closeModalWindowByOverlay(event);
  }

}
