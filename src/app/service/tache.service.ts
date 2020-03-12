import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private baseURL = 'http://localhost:9090/taches';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllTache(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteTache(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveTache(tache: any): Observable<any> {
    return this.httpClient.post(this.baseURL, tache);
  }
  public getTache(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateTache(id: number, tache: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, tache);
  }
}
