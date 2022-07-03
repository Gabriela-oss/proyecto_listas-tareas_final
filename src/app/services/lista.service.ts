import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  listas:Lista[] = [];

  constructor() { }

  get():Lista[]{
    return this.listas;
  }

  add(lista:Lista){
    this.listas.push(lista)
  }
}
