import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListaComponent } from './layout/form-lista/form-lista.component';
import { InicioComponent } from './layout/inicio/inicio.component'

const routes: Routes = [
  {path:"formlista", component:FormListaComponent},
  {path:"Inicio", component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
