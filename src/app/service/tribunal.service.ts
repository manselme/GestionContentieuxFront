import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TribunalService {

  private baseURL = 'http://localhost:9090/tribunals';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllTribunal(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteTribunal(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveTribunal(tribunal: any): Observable<any> {
    return this.httpClient.post(this.baseURL, tribunal);
  }
  public getTribunal(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateTribunal(id: number, tribunal: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, tribunal);
  }
}
