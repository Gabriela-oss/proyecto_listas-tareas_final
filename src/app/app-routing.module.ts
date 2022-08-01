import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTasksComponent } from './layout/edit-tasks/edit-tasks.component';
import { FormListaComponent } from './layout/form-lista/form-lista.component';
import { FormTareaComponent } from './layout/form-tarea/form-tarea.component';
import { InicioComponent } from './layout/home/inicio.component'
import { TasksComponent } from './layout/tasks/tasks.component';

const routes: Routes = [
  {path:"formLista", component:FormListaComponent},
  {path:"Inicio", component:InicioComponent},
  {path:"formTarea", component: FormTareaComponent},
  {path:"tasks", component: TasksComponent},
  {path:"tasks/editTasks/:_id", component:EditTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
