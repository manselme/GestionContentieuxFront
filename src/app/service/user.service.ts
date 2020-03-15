import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:9090/utilisateurs';
  constructor(private httpClient: HttpClient) { }
  public getAllUtilisateur(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteUtilisateur(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/id/" + id)
  }
  public saveUtilisateur(user: any): Observable<any> {
    return this.httpClient.post(this.baseURL, user);
  }
  public getUtilisateur(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/id/" + id);
  }
  public getUtilisateurByUsername(username : String): Observable<any> {
    return this.httpClient.get(this.baseURL + "/username/" + username);
  }
  public updateUtilisateur(id: number, user: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/id/" + id, user);
  }
}
