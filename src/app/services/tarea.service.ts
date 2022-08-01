import { Injectable } from '@angular/core';
import { Tarea } from '../classes/tarea';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas:Tarea[]=[];

  constructor(private http:HttpClient) { }

  returnTask():Tarea[]{
    return this.tareas;
  }

  getTasks():Observable<Tarea>|any{
    return this.http.get<Tarea[]>("http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33");
  }

  getTaskById(id:number):Observable<Tarea>|any{
    return this.http.get<Tarea[]>("http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id="+id); 
  }
}

