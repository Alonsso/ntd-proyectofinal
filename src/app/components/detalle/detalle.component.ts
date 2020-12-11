import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ProductosService} from '../productos/mProducto/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: string;
  enlace: any;
  precio: any;
  contenido: any;
  nombre: any;
  producto: any;

  constructor(private route: ActivatedRoute, private productoService: ProductosService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.producto = this.productoService.get(params.get('id'));
      this.id = params.get('id');

    });
    this.producto.subscribe(val => {
        this.enlace = val.image;
        this.precio = val.precio;
        this.contenido = val.peso;
        this.nombre = val.nombre;

      }
    );
    console.log(this.enlace);


  }
}
