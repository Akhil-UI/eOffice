import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.scss']
})
export class DemocomponentComponent {

  activeMenuItem: string;

  constructor(private menuService: MenuService) {
    this.activeMenuItem = this.menuService.getActiveMenuItem();
  }

}
