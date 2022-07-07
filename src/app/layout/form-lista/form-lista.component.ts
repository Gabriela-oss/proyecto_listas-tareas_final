import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/classes/lista';
import { ListaService } from 'src/app/services/lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-lista',
  templateUrl: './form-lista.component.html',
  styleUrls: ['./form-lista.component.css']
})

export class FormListaComponent implements OnInit {

  listas:Lista[];
  lista:Lista = new Lista("");

  constructor(private ls:ListaService, private router: Router) { 
    this.listas = ls.get();
  }
  agregar(){
    this.ls.add(new Lista(this.lista.titulo));
  }

  ngOnInit(): void {
  }

  onSelect(){
    this.router.navigate(['/formTarea']);
  }

}
