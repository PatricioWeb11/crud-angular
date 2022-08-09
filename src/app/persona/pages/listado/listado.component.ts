import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/Persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  personas: any = [];
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonasService()
    .subscribe((resp: any) => this.personas = resp.personas)
    // .subscribe(resp => console.log(resp.personas))
  }


}
