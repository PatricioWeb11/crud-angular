import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  personas = [];
  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.getPersonas()
    .subscribe(resp => console.log(resp))
  }

}
