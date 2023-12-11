import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { RouteInfo } from './menu-sidebar.metadata';
import { MenuSidebarService } from './menu-sidebar.service';
import { MenuService } from '../../../shared/services/menu.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: RouteInfo[] = [];
  path = '';
  //public isCollapsed = true;

  public isCollapsed = false;

  expandedIndex: number | null = null;

  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
  

  @Input() showClass: boolean = false;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleNotify() {
    this.notify.emit(!this.showClass);
  }

  constructor(
    private menuServise: MenuSidebarService,
    private menuService: MenuService,
    private router: Router,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');

    this.menuServise.items.subscribe((menuItems) => {
      this.sidebarnavItems = menuItems;

      // Active menu
      this.sidebarnavItems.filter((m) =>
        m.submenu.filter((s) => {
          if (s.path === this.router.url) {
            this.path = m.title;
          }
        })
      );
      this.addExpandClass(this.path);
    });
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  setActiveMenuItem(item: string) {
    this.menuService.setActiveMenuItem(item);
  }

  handleMenuItemClick(subItem: any): void {
    if (subItem.submenu.length === 0) {
      this.router.navigate([subItem.path]);
      this.showSubMenu = '';
    } else {
      if (this.showSubMenu === subItem.title) {
        this.showSubMenu = '';
      } else {
        this.showSubMenu = subItem.title;
      }
    }
  }

}
