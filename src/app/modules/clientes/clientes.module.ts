import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';



@NgModule({
  declarations: [NuevoClienteComponent, ListadoClientesComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class ClientesModule { }
