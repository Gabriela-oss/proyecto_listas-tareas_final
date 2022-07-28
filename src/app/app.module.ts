import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormListaComponent } from './layout/form-lista/form-lista.component';
import { FormTareaComponent } from './layout/form-tarea/form-tarea.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './layout/home/inicio.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './layout/tasks/tasks.component';
import { EditTasksComponent } from './layout/edit-tasks/edit-tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    FormListaComponent,
    FormTareaComponent,
    InicioComponent,
    TasksComponent,
    EditTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
