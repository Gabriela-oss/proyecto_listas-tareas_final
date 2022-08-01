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

  delete(lista:number):void{
    let deleteUrl:string = "http://backendtutoriadw.herokuapp.com/delete/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=" + lista;
    console.log(deleteUrl)
    this.http.delete(deleteUrl).subscribe(response =>{
        console.log(response);
    });
  }

  getListById(id:number):Observable<Lista>|any{
    return this.http.get<Lista[]>("http://backendtutoriadw.herokuapp.com/get/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id="+id); //al final pone el id para que se concatene con el parametro de la ruta, el signo de pregunta es para decirle que es un parametro en php
  }
}