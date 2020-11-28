import { NuevoClienteComponent } from './modules/clientes/nuevo-cliente/nuevo-cliente.component';
import { LoginComponent } from './components/login/login.component';
import { PersonasComponent } from './components/personas/personas.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './modules/clientes/listado-clientes/listado-clientes.component';

const routes: Routes = [
  {path: 'personas', component: PersonasComponent},
  {path: 'clienteNuevo', component: NuevoClienteComponent},
  {path: 'listaClientes', component: ListadoClientesComponent},
  {path: '', component: LoginComponent},
  { path: 'login', loadChildren: () => import('./autenticacion/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./autenticacion/registro/registro.module').then(m => m.RegistroModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
