import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormListaComponent } from './layout/form-lista/form-lista.component';
import { FormTareaComponent } from './layout/form-tarea/form-tarea.component';
import { InicioComponent } from './layout/home/inicio.component'

const routes: Routes = [
  {path:"formLista", component:FormListaComponent},
  {path:"Inicio", component:InicioComponent},
  {path:"formTarea", component: FormTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
