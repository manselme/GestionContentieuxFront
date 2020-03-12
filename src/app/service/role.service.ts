import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseURL = 'http://localhost:9090/roles';
  
  constructor(private httpClient: HttpClient) { }
  
  public getAllRole(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteRole(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveRole(user: any): Observable<any> {
    return this.httpClient.post(this.baseURL, user);
  }
  public getRole(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateRole(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, user);
  }
}
