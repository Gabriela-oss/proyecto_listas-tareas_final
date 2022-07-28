import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/classes/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tareas:Tarea[]=[];

    constructor(private ts:TareaService, private http:HttpClient) { }

    showTasks(){
      this.ts.getTasks().subscribe((data:Tarea[])=>{
        console.log(data)
        this.tareas = data;
      })
    }

    deleteT(tarea:number):void{
      let deleteUrl:string = "http://backendtutoriadw.herokuapp.com/delete/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=" + tarea;
      console.log(deleteUrl)
      this.http.delete(deleteUrl).subscribe(response =>{
          console.log(response);
      });
  }

  ngOnInit(): void {
    this.showTasks();
  }

}
