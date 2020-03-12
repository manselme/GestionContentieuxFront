import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticulierService {

private baseURL = 'http://localhost:9090/particuliers';

constructor(private httpClient: HttpClient) { }

public getAllParticulier(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteParticulier(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveParticulier(user: any): Observable<any> {
    return this.httpClient.post(this.baseURL, user);
  }
  public getParticulier(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateParticulier(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, user);
  }

}
