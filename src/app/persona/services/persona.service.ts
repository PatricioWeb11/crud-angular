import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPersonasService(){
    return this.http.get(this.baseUrl)
    
  }

  addPersonaService(nombre: string, edad: number){
    const body = {nombre, edad}
    return this.http.post<Response>(this.baseUrl, body);
  }
}
