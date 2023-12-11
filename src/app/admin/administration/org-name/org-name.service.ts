import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { TableDataInf } from './tabledata-inf';
import { data } from '../../../../assets/org-name';

@Injectable({
  providedIn: 'root'
})
export class OrgNameService {

  constructor(private http: HttpClient) {}

  private data: TableDataInf[] = data;

  getData(): Observable<any> {
    return from(this.data);
  }

 
}
