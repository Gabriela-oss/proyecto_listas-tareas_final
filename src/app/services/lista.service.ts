import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  listas:Lista[] = [];

  constructor(private http:HttpClient) { }

  get():Lista[]{
    return this.listas;
  }

  getLists():Observable<Lista[]>{
    return this.http.get<Lista[]>("http://backendtutoriadw.herokuapp.com/get/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33");
  }

  addList(titulo:string):void{  
      let lista = {nombre:titulo}
      console.log(lista)
      this.http.post("http://backendtutoriadw.herokuapp.com/add/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33",lista).subscribe((data)=>{
        console.log(data)
      })
  }
}