import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionnelService {

  private baseURL = 'http://localhost:9090/professionels';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllProfessionel(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteProfessionel(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveProfessionel(user: any): Observable<any> {
    return this.httpClient.post(this.baseURL, user);
  }
  public getProfessionel(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateProfessionel(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, user);
  }
}
