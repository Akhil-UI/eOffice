import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  activeMenuItem: string; // Property to store the active menu item

  setActiveMenuItem(item: string) {
    this.activeMenuItem = item;
  }

  getActiveMenuItem(): string {
    return this.activeMenuItem;
  }
}
