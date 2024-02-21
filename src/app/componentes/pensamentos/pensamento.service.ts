import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pensamento } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = "http://localhost:3000/pensamento"
  constructor(private http: HttpClient) { }

  list():Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)
  }

  create(pensamento:Pensamento):Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  delete(id: number):Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  findById(id: number):Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
