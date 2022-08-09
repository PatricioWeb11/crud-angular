import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  addPersona(){
    
  }

}
