import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private baseURL = 'http://localhost:9090/phases';
 
  constructor(private httpClient: HttpClient) { }
 
  public getAllPhase(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deletePhase(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public savePhase(phase: any): Observable<any> {
    return this.httpClient.post(this.baseURL, phase);
  }
  public getPhase(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updatePhase(id: number, phase: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, phase);
  }
}
