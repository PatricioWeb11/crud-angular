import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) {}

  getPersonas(){
    return this.http.get('http://localhost:3000/personas');
  }
}
