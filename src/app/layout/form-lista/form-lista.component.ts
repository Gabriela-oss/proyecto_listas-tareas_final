import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/classes/lista';
import { ListaService } from 'src/app/services/lista.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-lista',
  templateUrl: './form-lista.component.html',
  styleUrls: ['./form-lista.component.css']
})
export class FormListaComponent implements OnInit {

  // listas:Lista[];
  lista:Lista= new Lista("", 0);
  alert:boolean = false;

  constructor(private ls:ListaService, private http:HttpClient){ 
    // this.listas = ls.getLists();
  }
    
  add(titulo:string){  
    if(titulo == ""){
      this.alert = true
    }else{
      this.alert = false;
      this.ls.addList(titulo)
      // this.listas.push(lista)
  }
}

  ngOnInit(): void {
  }


}
