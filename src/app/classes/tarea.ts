export class Tarea {
  public tituloTarea:string;
  public descripcion:string;
  public urgencia:string;
  public estadoTarea:string;
  public responsable:string;
  public datosContacto:string;
  constructor(tituloTarea:string,
              descripcion:string,
              urgencia:string,
              estadoTarea:string,
              responsable:string,
              datosContacto:string){
                this.tituloTarea = tituloTarea;
                this.descripcion = descripcion;
                this.urgencia = urgencia;
                this.estadoTarea = estadoTarea;
                this.responsable = responsable;
                this.datosContacto = datosContacto;
              }
}
