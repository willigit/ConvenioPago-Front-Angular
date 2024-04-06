import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { RegistroConvenioComponent } from './registro-convenio/registro-convenio.component';

import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaClienteComponent,
    RegistroConvenioComponent,
    ModalComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,    
    FormsModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
