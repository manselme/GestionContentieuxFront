import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiersService {

  private baseURL = 'http://localhost:9090/tiers';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllTiers(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteTiers(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveTiers(tiers: any): Observable<any> {
    return this.httpClient.post(this.baseURL, tiers);
  }
  public getTiers(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateTiers(id: number, tiers: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, tiers);
  }
}
