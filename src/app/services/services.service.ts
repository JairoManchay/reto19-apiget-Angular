import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  // definiendo la ruta para la api
  apiUser = environment.Api_url + 'albums/'

  metodoGet(): Observable<string>{
    return this.http.get<string>(this.apiUser);
  }

}
