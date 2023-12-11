import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';


@Injectable({
    providedIn: 'root',
  })
  export class NodeService {
    private treeDataUrl = 'assets/tree-data.json';
  
    constructor(private http: HttpClient) {}
    
    
    
    getNodes(): Observable<TreeNode[]> {
      return this.http.get<TreeNode[]>(this.treeDataUrl);
    }
  
    getSelectNodes(): Observable<TreeNode[]> {
      return this.http.get<TreeNode[]>(this.treeDataUrl);
    }
  }
    
