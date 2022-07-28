import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { TareaService } from 'src/app/services/tarea.service';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from 'src/app/classes/lista';
import { Tarea } from 'src/app/classes/tarea';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})
export class FormTareaComponent implements OnInit {

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

  /*urgencia:UntypedFormControl = new UntypedFormControl();
  estados:UntypedFormControl = new UntypedFormControl();

  formTasks:UntypedFormGroup = new UntypedFormGroup({
    nombre:new UntypedFormControl("",[Validators.required]),
    descripcion: new UntypedFormControl("",[Validators.required]),
    datosContacto: new UntypedFormControl("",[Validators.required]), 
    fechaVencimiento: new UntypedFormControl("", [Validators.required]), 
    urgencia: this.fb.group({
      urgencia:this.urgencia
    }),
    estado: this.fb.group({
      estado:this.estados
    })
  })

  // listas:Tarea[] 
  tareas_lista:Tarea[]=[];
  lista:Lista = new Lista("",0); 
  lists:Lista[]=[];*/

  constructor(public ruta:ActivatedRoute, private t:TareaService, public ls:ListaService, private http:HttpClient) { 
    
    this.tareas = t.returnTask();
    
    /*this.listas = ls.getLists();

    ruta.paramMap.subscribe((p:ParamMap)=>{
      let id:number = parseInt(p.get("id")||"0");
      this.tareas_lista = this.listas.filter((tr:Tarea)=>{
        console.log(tr) 
        return tr.lista.categoriaLista == id; 
      })
    }) */
  }
  v:any;

  getTasks():Observable<Tarea>|any{
    return this.http.get<Tarea[]>("http://backendtutoriadw.herokuapp.com/get/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33").subscribe((data:any)=>{
      data.forEach((element:any)=>{
        let li:Tarea={_id:element._id, nombre: element.nombre, descripcion: element.descripcion, urgenciaNumber: element.urgenciaNumber, urgenciaString: element.urgenciaString, fechaVencimiento: element.fechaVencimiento, estado: element.estado, posicion: element.posicion, datosContacto: element.datosContacto, lista: element.Lista};
        this.tareas.push(li);
        console.log(li);
        console.log(this.tareas);
      })
    })
  }

  addTask(){
    console.log("pruebas")
    let baseUrl='http://backendtutoriadw.herokuapp.com/add/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33';
    // let tareaT:any = this.task;
    this.task.datosContacto = "nombre responsable:" + this.datosContacto.responsable.nombreResponsable + "rol responsable:" + this.datosContacto.responsable.rolResponsable + "tipo Contacto:" + this.datosContacto.tipoContacto + "correo:" + this.datosContacto.correo + "telefono:" + this.datosContacto.telefono + "direccion:" + this.datosContacto.direccion
    console.log(this.task)
    this.http.post(baseUrl,this.task).subscribe((data:any)=>{
      console.log(data.response);
      console.log(this.task)
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

  ngOnInit(): void {
    // this.ls.getLists().subscribe((data:any)=>{
    //   data.forEach((element:any) => {
    //     this.lists.push(element)
    //   });
    //   console.log(this.lists)
    //   // this.lists = data;
    // });

    // this.formTasks.get("estados")?.valueChanges.subscribe((value)=>{console.log(value)})
    this.getList()
    this.getTasks()
  }

  // addTask(){
  //   console.log(this.formTasks)
  //   if (this.formTasks.valid){
  //     this.t.addTasks(this.lista, this.formTasks.get("nombre")?.value, this.formTasks.get("descripcion")?.value, this.formTasks.get("urgencia")?.value, this.formTasks.get("estados")?.value, this.formTasks.get("datosContacto")?.value, this.formTasks.get("fechaVencimiento")?.value) 
  //     console.log("se guardo bien")
  //   }else{
  //     console.log("no se pudo agregar una tarea")
  //   }
  // }
}
