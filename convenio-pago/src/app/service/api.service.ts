import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  ConsultarPost(datos: any): Observable<any> {    
    const urlApi = 'https://localhost:7158/cliente/consultar'                      
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'pagueYa' ,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post(urlApi, datos, httpOptions);
  }

  GuardarPost(datos: any): Observable<any> {    
    const urlApi = 'https://localhost:7158/convenio/registrar'                      
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'pagueYa' ,
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post(urlApi, datos, httpOptions);
  }
}
 