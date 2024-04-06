import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  mensaje: string | undefined;
  mensajeOk: string | undefined;
  @Input() data: any;
  @Output() closeModal = new EventEmitter();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  constructor(private apiService: ApiService) { }  
  GuardarRegistro(data: any, valor: any, motivo: any): void {    
    if(valor === "" || valor === "0"){
      valor = "-1";
    }
    const datosAEnviar = { 
      MontoConvenio: valor,
      MontoDeuda: data.montoDeuda,
      FechaConvenio: data.fechaConvenio,
      Motivo: motivo,
      Cedula: data.cedula 
    }; 



    this.apiService.GuardarPost(datosAEnviar).subscribe({
      next: (respuesta) => {
        console.log('Datos enviados con éxito', respuesta);        
        if(respuesta.succes === false)
        {
          this.mensaje = respuesta.message;
          this.mensajeOk = undefined;
        }
        else
        {
          this.mensajeOk = respuesta.message;
          this.mensaje = undefined;
          this.ejecutarDespuesDeUnSegundo();          
        }

      },
      error: (error) => {
        console.error('Error al enviar datos:', error);
      }
    });
    
  }

  ejecutarDespuesDeUnSegundo() {
    console.log('Inicio');
    setTimeout(() => {      
      this.closeModal.emit();
      console.log('Acción después del retraso');
    }, 1500); // El retraso es de 2000 milisegundos, es decir, 2 segundos
    console.log('Fin');

    
  }
  



}
