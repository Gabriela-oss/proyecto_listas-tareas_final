import { Injectable } from '@angular/core';
import { Tarea } from '../classes/tarea';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lista } from '../classes/lista';
@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  constructor(private http:HttpClient) { }

  getTasks():Observable<Tarea>|any{
    return this.http.get<Tarea[]>("http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33");
  }

  addTasks(categoriaLista:Lista, nombre:string, descripcion:string, urgenciaString:string, fechaVencimiento:string, estado:string, datosContacto:string):void{  
    let tarea = {categoriaLista:categoriaLista, nombre:nombre, descripcion:descripcion, urgenciaString:urgenciaString ,urgenciaNumber:0 , fechaVencimiento:fechaVencimiento, estado:estado, datosContacto:datosContacto}
    console.log(tarea)
    this.http.post("http://backendtutoriadw.herokuapp.com/add/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33",tarea).subscribe((data)=>{
      console.log(data)
    })
  }
}

