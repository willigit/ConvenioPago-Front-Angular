import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent {
  valorConsulta= "";
  valorRegistro= "";
  mensaje: string | undefined;
  validaPantalla: string | undefined;
  noAplica: string | undefined;
  resultados: any[] = [];
  titulo2 = 'Consulta de Cliente';
  constructor(private apiService: ApiService) { }

  ConsultaCliente(value: any)
  {    
    this.valorConsulta = value        
    this.consultarData();
  } 
  RegistroConvenio(value: any)
  {    
    this.valorRegistro = value        
    
  }   

  consultarData() {
    const datosAEnviar = { Cedula: this.valorConsulta }; 
    this.apiService.ConsultarPost(datosAEnviar).subscribe({
      next: (respuesta) => {
        console.log('Datos enviados con éxito', respuesta);
        
        const exitoso = respuesta.result[0].exitoso;

        if (exitoso === false) {
          this.mensaje = respuesta.result[0].motivo;
          this.resultados = [];
          this.validaPantalla = undefined;
        } else {
          this.mensaje = 'Consulta Exitosa';
          this.resultados = respuesta.result;
          this.validaPantalla = "true";
          this.noAplica = undefined;
          if(respuesta.result[0].cedula === null || respuesta.result[0].cedula === "" ){
            this.noAplica = "true";
            this.validaPantalla = undefined;
          }
        }

      },
      error: (error) => {
        console.error('Error al enviar datos:', error);
      }
    });
  }


} 

