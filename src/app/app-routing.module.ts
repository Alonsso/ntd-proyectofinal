import { DetalleComponent } from './components/detalle/detalle.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { PersonasComponent } from './components/personas/personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './components/productos/productos.component';
import {CarritoComponent} from './components/carrito/carrito.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: '', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./autenticacion/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./autenticacion/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'productos', component: ProductosComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'detalle/:id/:enlace/:precio/:contenido/:nombre', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
