import { Lista } from "./lista";
export class Tarea {
  public _id:number = 0;
  public nombre:string="";
  public descripcion:string="";
  public urgenciaString:string="";
  public urgenciaNumber:number=0;
  public fechaVencimiento:string="";
  public estado:string="";
  public posicion:number=0;
  public datosContacto:any = {
    responsable:{
      nombreResponsable: "",
      rolResponsable:""
    },
    tipoContacto:"",
    correo:"",
    telefono:"", 
    direccion:""
  };
  public lista:Lista={
    categoriaLista:0,
    nombre:""
  }
}
