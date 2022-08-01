import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from 'src/app/classes/lista';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listas:any[] = [];
  closeResult = '';
  idLists:number = 0;

  constructor( private router:Router, private ls:ListaService, private http:HttpClient, private modalService: NgbModal){ 
  }
  
  ngOnInit(): void {
    this.showLists();
    // this.listFiltered = this.listas;
    // this.filterList();
  }

  showLists(){
    this.ls.getLists().subscribe((data:Lista[])=>{
      // console.log(data)
      this.listas = data;
      console.log(this.listas)
    })
  }
  
  delete():void{
    let deleteUrl:string = "http://backendtutoriadw.herokuapp.com/delete/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=" + this.idLists;
    console.log(deleteUrl)
    this.http.delete(deleteUrl).subscribe(response =>{
        console.log(response);
    });
  }

  onSelect(){
    this.router.navigate(['/formTarea']);
  }

  open(content:any, idList:number) {
    this.idLists = idList
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

}