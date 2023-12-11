import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  
export class ActionMasterService {

  private apiUrl = 'http://localhost:8080/admin/action';

  constructor(private http: HttpClient) { }
  
  create(actionData: any): Observable<any> {
    return this.http.post(this.apiUrl, actionData);
  }

  read(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  update(actionId: number, actionData: any): Observable<any> {
    const url = `${this.apiUrl}/${actionId}`;
    return this.http.put(url, actionData);
  }

  delete(actionId: number): Observable<any> {
    const url = `${this.apiUrl}/${actionId}`;
    return this.http.delete(url);
  }

   // Define a method to save a record
   saveRecord(data: any) {
    return this.http.post(`${this.apiUrl}/saveRecord`, data);
  }

  // Define a method to get table data
  getTableData() {
    return this.http.get(`${this.apiUrl}/tableData`);
  }
}


