import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from 'src/app/classes/lista';
import { TareaService } from 'src/app/services/tarea.service';
import { Tarea } from 'src/app/classes/tarea';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listas:Lista[] = [];
  tareas:Tarea[]=[];

  constructor( private router:Router, private ls:ListaService, private ts:TareaService){ 
  }

  showLists(){
    this.ls.getLists().subscribe((data:Lista[])=>{
      console.log(data)
      this.listas = data;
    })
  }

  showTasks(){
    this.ts.getTasks().subscribe((data:Tarea[])=>{
      console.log(data)
      this.tareas = data;
    })
  }
  
  onSelect(){
    this.router.navigate(['/formTarea']);
  }

  ngOnInit(): void {
    this.showLists();
    this.showTasks();
  }
}