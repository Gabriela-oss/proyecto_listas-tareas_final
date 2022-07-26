import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TareaService } from 'src/app/services/tarea.service';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from 'src/app/classes/lista';
import { Tarea } from 'src/app/classes/tarea';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']
})
export class FormTareaComponent implements OnInit {
  urgencia:FormControl = new FormControl();
  estados:FormControl = new FormControl();

  formTasks:FormGroup = new FormGroup({
    nombre:new FormControl("",[Validators.required]),
    descripcion: new FormControl("",[Validators.required]),
    datosContacto: new FormControl("",[Validators.required]), 
    fechaVencimiento: new FormControl("", [Validators.required]), 
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
  lists:Lista[]=[];

  constructor(public ruta:ActivatedRoute, private t:TareaService, public ls:ListaService, private fb:FormBuilder ) { 
    // this.listas = ls.getLists();

    // ruta.paramMap.subscribe((p:ParamMap)=>{
    //   let id:number = parseInt(p.get("id")||"0");
    //   this.tareas_lista = this.listas.filter((tr:Tarea)=>{
    //     console.log(tr) 
    //     return tr.lista.categoriaLista == id; 
    //   })
    // })
  }

  ngOnInit(): void {
    this.ls.getLists().subscribe((data:any)=>{
      data.forEach((element:any) => {
        this.lists.push(element)
      });
      console.log(this.lists)
      // this.lists = data;
    });

    this.formTasks.get("estados")?.valueChanges.subscribe((value)=>{console.log(value)})
  }

  addTask(){
    console.log(this.formTasks)
    if (this.formTasks.valid){
      this.t.addTasks(this.lista, this.formTasks.get("nombre")?.value, this.formTasks.get("descripcion")?.value, this.formTasks.get("urgencia")?.value, this.formTasks.get("estados")?.value, this.formTasks.get("datosContacto")?.value, this.formTasks.get("fechaVencimiento")?.value) 
      console.log("se guardo bien")
    }else{
      console.log("no se pudo agregar una tarea")
    }
  }
}
