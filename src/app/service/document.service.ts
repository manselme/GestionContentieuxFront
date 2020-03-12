import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseURL = 'http://localhost:9090/documents';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllDocument(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteDocument(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveDocument(user: any): Observable<any> {
    return this.httpClient.post(this.baseURL, user);
  }
  public getDocument(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateDocument(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, user);
  }
}
