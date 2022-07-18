import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaService } from 'src/app/services/lista.service';
import { Lista } from 'src/app/classes/lista';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listas:Lista[] = [];
  constructor( private router:Router, private ls:ListaService) { 
  }


  showLists(){
    this.ls.getLists().subscribe((data:Lista[])=>{
      console.log(data)
      this.listas = data;
    })
  }

  ngOnInit(): void {
    this.showLists()
  }

  onSelect(){
    this.router.navigate(['/formTarea']);
  }
}
