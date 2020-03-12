import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionelService {

  private baseURL = 'http://localhost:9090/professionels';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllProfessionel(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteProfessionel(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveProfessionel(professionel: any): Observable<any> {
    return this.httpClient.post(this.baseURL, professionel);
  }
  public getProfessionel(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateProfessionel(id: number, professionel: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, professionel);
  }
}
