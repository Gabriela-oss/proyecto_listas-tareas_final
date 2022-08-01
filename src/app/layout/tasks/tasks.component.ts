import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from 'src/app/classes/tarea';
import { TareaService } from 'src/app/services/tarea.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tareas: Tarea[] = [];
  closeResult = '';
  idTasks:number = 0;

  constructor(private ts: TareaService, private http: HttpClient, private modalService: NgbModal) {}

  showTasks() {
    this.ts.getTasks().subscribe((data: Tarea[]) => {
      console.log(data);
      this.tareas = data;
    });
  }

  deleteT(): void {
    let deleteUrl: string =
      'http://backendtutoriadw.herokuapp.com/delete/task/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=' +
      this.idTasks;
    console.log(deleteUrl);
    this.http.delete(deleteUrl).subscribe((response) => {
      console.log(response);
    });
  }

  open(content:any, idTask:number) {
    this.idTasks = idTask
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return `with: ${reason}`;
      }
  }

  ngOnInit(): void {
    this.showTasks();
  }
}
