import { ModificadoclienteComponent } from './modules/clientes/modificado-cliente/modificado-cliente.component';
import { ListadoClientesComponent } from './modules/clientes/listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './modules/clientes/nuevo-cliente/nuevo-cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {ProductosComponent} from './components/productos/productos.component';
import {DetalleComponent} from './components/detalle/detalle.component';
import {CarritoComponent} from './components/carrito/carrito.component';
import {PagoComponent} from './components/pago/pago.component';





@NgModule({
  declarations: [
    AppComponent,
    NuevoClienteComponent,
    ListadoClientesComponent,
    ModificadoclienteComponent,
    ProductosComponent,
    DetalleComponent,
    CarritoComponent,
    PagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
