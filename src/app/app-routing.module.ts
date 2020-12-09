import { ModificadoclienteComponent } from './modules/clientes/modificado-cliente/modificado-cliente.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { ListadoClientesComponent } from './modules/clientes/listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './modules/clientes/nuevo-cliente/nuevo-cliente.component';
import { PersonasComponent } from './components/personas/personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: 'clienteNuevo', component: NuevoClienteComponent },
  { path: 'listaClientes', component: ListadoClientesComponent },
  { path: '', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./autenticacion/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./autenticacion/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'modificaCliente/:ids', component: ModificadoclienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
