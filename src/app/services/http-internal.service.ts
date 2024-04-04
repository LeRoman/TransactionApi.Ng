import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpInternalService {
  public url:string="http://localhost:5015/api/transactions"

  constructor(private http: HttpClient) { }

  public getRequest<T>(url: string, httpParams?: any): Observable<T> {
    return this.http.get<T>(url, { headers: new HttpHeaders(), params: httpParams });
}

/*public getFullRequest<T>(url: string, httpParams?: any): Observable<HttpResponse<T>> {
    return this.http.get<T>(this.buildUrl(url), { observe: 'response', headers: this.getHeaders(), params: httpParams });
}*/
}
