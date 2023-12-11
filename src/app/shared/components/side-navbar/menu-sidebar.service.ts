import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouteInfo } from './menu-sidebar.metadata';
import { ROUTES } from './menu-sidebar-items';


@Injectable({
    providedIn: 'root'
})
export class MenuSidebarService {


    MENUITEMS: RouteInfo[] = ROUTES;

    items = new BehaviorSubject<RouteInfo[]>(this.MENUITEMS);

    constructor() {
    }
}
