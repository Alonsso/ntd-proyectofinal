import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from './mProducto/productos.service';
import { AutenticacionService } from 'src/app/autenticacion/services/autenticacion.service';
import { Producto } from './mProducto/producto.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [AutenticacionService]
})
export class ProductosComponent implements OnInit {

  public isLogged = false;
  public user = null;
  productosTodos: any[] = [];

  constructor(private productoService: ProductosService,
              private autenticacion: AutenticacionService,
              private router: Router) { }

  /*
   doAgregarProducto(id: string) {
    this.productoService.agregarProducto(id).then(
      res => {
        this.router.navigate(['/carrito']);
      },
      err => {
        console.log(err);
      }
    );
  }*/

  async ngOnInit() {
    this.user = await this.autenticacion.getUsuarioActual();
    if (this.user) {
      this.isLogged = true;
    }

    this.productoService.getAllProductos().subscribe(data => {
      this.productosTodos = data.map(e => {
        console.log('ALL PRODUCTOS');
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Producto
        };
      });
    });
  }

  onLogout() {
    this.autenticacion.logout();
    this.router.navigate(['/']);
  }

}
