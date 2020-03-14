import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {
  
  private baseURL = 'http://localhost:9090/affaires';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllAffaire(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteAffaire(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveAffaire(affaire: any): Observable<any> {
    return this.httpClient.post(this.baseURL, affaire);
  }
  public getAffaire(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateAffaire(id: number, affaire: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, affaire);
  }
  public archiverAffaire(id:number, affaire: any):Observable<any> {
  return this.httpClient.put(this.baseURL + "/" + id , affaire);
}}
