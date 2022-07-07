import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/classes/lista';
import { FormListaComponent } from '../form-lista/form-lista.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  // listas:Lista[];
  constructor() { }

  ngOnInit(): void {
  }

}
