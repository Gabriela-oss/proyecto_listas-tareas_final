import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/classes/lista';
import { Tarea } from 'src/app/classes/tarea';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from 'src/app/services/tarea.service';
import { ListaService } from 'src/app/services/lista.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditTasksComponent implements OnInit {

  listas:Lista[]=[];
  tareas:Tarea[]=[];

  task:any={
    _id:"",
    nombre:"",
    descripcion:"",
    urgenciaString:"",
    urgenciaNumber:0,
    fechaVencimiento:"",
    estado:"terminado",
    posicion:0,
    datosContacto:"",
    Lista:{categoriaLista:0, nombre:""}
  }

  datosContacto:any = {
    responsable:{
      nombreResponsable: "",
      rolResponsable:""
    },
    tipoContacto:"",
    correo:"",
    telefono:"", 
    direccion:""
  }

  constructor(public ruta:ActivatedRoute, private t:TareaService, public ls:ListaService, private http:HttpClient) { 
    this.tareas = t.returnTask();
  }
  v:any;

  ngOnInit(): void {
    // let id:number = parseInt(this.ruta.snapshot.paramMap.get("_id")||"0")
    
    this.getList()
    this.getTasks()
  }

  getTasks():Observable<Tarea>|any{
    let id:number = parseInt(this.ruta.snapshot.paramMap.get("_id")||"0")

    return this.http.get<Tarea[]>("http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33").subscribe((data:any)=>{
      data.forEach((element:any)=>{
        let li:Tarea={_id:element._id, nombre: element.nombre, descripcion: element.descripcion, urgenciaNumber: element.urgenciaNumber, urgenciaString: element.urgenciaString, fechaVencimiento: element.fechaVencimiento, estado: element.estado, posicion: element.posicion, datosContacto: element.datosContacto, lista: element.Lista};
        // this.task.push(li);
        if(element._id == id){
          this.task = element
        }
      })
    })
  }

  updateTask(){
    let id:number = parseInt(this.ruta.snapshot.paramMap.get("_id")||"0")
    console.log(id)
    let baseUrl='http://backendtutoriadw.herokuapp.com/edit/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=' + id
    // let tareaT:any = this.task;
    this.task.datosContacto = "nombre responsable:" + this.datosContacto.responsable.nombreResponsable + "rol responsable:" + this.datosContacto.responsable.rolResponsable + "tipo Contacto:" + this.datosContacto.tipoContacto + "correo:" + this.datosContacto.correo + "telefono:" + this.datosContacto.telefono + "direccion:" + this.datosContacto.direccion
    console.log(this.task)
    this.http.put(baseUrl,this.task).subscribe((data:any)=>{
      console.log(data)
    })
  }

  getList():Lista[]|any{
    this.http.get("http://backendtutoriadw.herokuapp.com/get/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33").subscribe((data:any)=>{
      data.forEach((element:any)=>{
        let lis={nombre:element.nombre, categoriaLista:element._id}
        this.listas.push(lis)
      })
    })
  }



}
