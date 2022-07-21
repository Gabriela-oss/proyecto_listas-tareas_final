import { Lista } from "./lista";
export class Tarea {
  public id:number;
  public nombre:string;
  public descripcion:string;
  public urgenciaString:string;
  public fechaVencimiento:string;
  public estado:string;
  public datosContacto:string;
  public lista:Lista;
  constructor(id:number,
              nombre:string,
              descripcion:string,
              urgenciaString:string,
              fechaVencimiento:string,
              estado:string,
              datosContacto:string,
              lista:Lista){
                this.id = id;
                this.nombre = nombre;
                this.descripcion = descripcion;
                this.urgenciaString = urgenciaString;
                this.fechaVencimiento = fechaVencimiento;
                this.estado = estado;
                this.datosContacto = datosContacto;
                this.lista = lista;
              }
}
