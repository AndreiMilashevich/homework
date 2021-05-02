import { Injectable } from '@angular/core';
import { MODAL_WINDOW_CONFIG } from '../shared/constants/mockData';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  modalWindowData = MODAL_WINDOW_CONFIG;

  isModalWindowVisible = false;

  constructor() { }

  openModalWindow(): void {
    this.isModalWindowVisible = true;
  }

  closeModalWindow(): void {
    this.isModalWindowVisible = false;
  }

  closeModalWindowByOverlay(event: MouseEvent): void {
    if ((event.target as HTMLElement).dataset.close) {
      this.isModalWindowVisible = false;
    }
  }
}
