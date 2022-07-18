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
  alert:boolean = false;

  constructor(private http:HttpClient) { }

  get():Lista[]{
    return this.listas;
  }

  getLists():Observable<Lista>|any{
    return this.http.get<Lista[]>("http://backendtutoriadw.herokuapp.com/get/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33");
  }

  add(lista:Lista){
    this.listas.push(lista)
  }

//   addList(titulo:string){  
//     if(this.lista.titulo == ""){
//       this.alert = true
//     }else{
//       this.alert = false;

//     let lista = {nombre:titulo}
//     this.http.post("http://backendtutoriadw.herokuapp.com/add/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33",lista).subscribe((data)=>{
//       return data
//     })
//     console.log(lista)
//   // }
// }
  // addList(titulo:string){
  //   let datos = this.http.post("http://backendtutoriadw.herokuapp.com/add/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33",titulo).subscribe((data)=>{
  //     console.log(data);
  //   })
  // }

  // addList(titulo:string):Lista|any{
  //   let respuesta:any;
  //   let datos:Observable<any>=this.http.get("http://backendtutoriadw.herokuapp.com/add/list/%3Ctoken%3E?id="+titulo)
  //   //este me recibe varios parametros
  //   console.log("http://backendtutoriadw.herokuapp.com/add/list/%3Ctoken%3E?id="+titulo) //esto es para verificar que la ruta este bien
  //   datos.subscribe((element:Lista)=>{
  //     return respuesta=element
  //   })
  // } 
}