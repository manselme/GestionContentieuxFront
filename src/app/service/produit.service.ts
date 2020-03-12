import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseURL = 'http://localhost:9090/produits';
  constructor(private httpClient: HttpClient) { }
  public getAllProduits(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  public deleteProduits(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/" + id)
  }
  public saveProduit(produit: any): Observable<any> {
    return this.httpClient.post(this.baseURL, produit);
  }
  public getProduit(id: number): Observable<any> {
    return this.httpClient.get(this.baseURL + "/" + id);
  }
  public updateProduit(id: number, produit: any): Observable<any> {
    return this.httpClient.put(this.baseURL + "/" + id, produit);
  }
}
