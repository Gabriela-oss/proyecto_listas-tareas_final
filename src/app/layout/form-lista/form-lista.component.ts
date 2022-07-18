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

  listas:Lista[];
  lista:Lista= new Lista("")
  alert:boolean = false;

  constructor(private ls:ListaService, private http:HttpClient) { 
    this.listas = ls.get();
  }
    
  addList(titulo:string):void{  
    if(titulo == ""){
      this.alert = true
    }else{
      this.alert = false;

      let lista = {nombre:titulo}
      console.log(lista)
      this.http.post("http://backendtutoriadw.herokuapp.com/add/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33",lista).subscribe((data)=>{
        // return data
        console.log(data)
      })
      this.listas.push(lista)
  }
}

  ngOnInit(): void {
  }

}
