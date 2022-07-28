import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from 'src/app/classes/lista';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listas:any[] = [];

  constructor( private router:Router, private ls:ListaService, private http:HttpClient){ 
  }

  showLists(){
    this.ls.getLists().subscribe((data:Lista[])=>{
      console.log(data)
      this.listas = data;
      console.log(this.listas)
    })
  }

  delete(lista:number):void{
    let deleteUrl:string = "http://backendtutoriadw.herokuapp.com/delete/list/3GVx6bUV5RuHfmHUZG74nbk7cjUV33?_id=" + lista;
    console.log(deleteUrl)
    this.http.delete(deleteUrl).subscribe(response =>{
        console.log(response);
    });
}
  
  onSelect(){
    this.router.navigate(['/formTarea']);
  }

  ngOnInit(): void {
    this.showLists();
  }
}