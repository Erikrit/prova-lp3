import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Entity} from './entity';
@Injectable({
  providedIn: 'root'
})
export class ProvaServiceService {
  private provaUrl = '//http:localhost:api/prova';  
  

  constructor(
    private http: HttpClient,
    private entity:Entity
  ) { }


  SalvarHeroes (): Observable<entity[]> {
    return this.http.post<entity[]>(this.provaUrl)
  }

  BuscarHeroes (): Observable<entity[]> {
    return this.http.get<entity[]>(this.provaUrl)
  }
}
