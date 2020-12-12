import { CartService } from './../../services/cart.service';
import { FormGroup, FormControl } from '@angular/forms';
import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Producto } from '../productos/mProducto/producto.model';
import {ProductosService} from '../productos/mProducto/productos.service';
import { IItem } from 'src/app/models/item.interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: string;
  sku: any;
  enlace: any;
  precio: any;
  marca: any;
  peso: any;
  contenido: any;
  categoria: any;
  nombre: any;
  producto: any;
  uid: string;

  addToCartForm = new FormGroup({
    quantity: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService,
    private cartService: CartService,
    private angularFireAuth: AngularFireAuth
    ) { }

  ngOnInit(): void {

    this.angularFireAuth
      .user
      .subscribe(user => {
        this.uid = user?.uid;
        /*
        console.log("####### Component #######");
        console.log(this.uid);
        console.log("####### Component #######");
        */
      });

    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.producto = this.productoService.get(params.get('id'));
      this.id = params.get('id');
    });

    this.producto.subscribe(val => {

      /*
      console.log('{sku: ' + val.id + ',' +
      'nombre: ' + val.nombre  + ',' +
      'precio: ' + val.precio + ',' +
      'categoria: ' + val.categoria + ',' +
      'marca: ' + val.marca + ',' +
      'peso: ' + val.peso + ',' +
      'image: ' + val.image + '}');
      */

      this.sku = val.id;
      this.nombre = val.nombre;
      this.precio = val.precio;
      this.marca = val.marca;
      this.peso = val.peso;
      this.enlace = val.image;
      this.contenido = val.peso;
      this.categoria = val.categoria;
    });

    console.log(this.enlace);
  }

  add(data: any) {
    console.log(data);
    this.cartService.add(this.uid, {
      id: this.sku,
      nombre: this.nombre,
      precio: this.precio,
      categoria: this.categoria,
      marca: this.marca,
      peso: this.peso,
      image: this.enlace,
      cantidad: data.quantity,
    });
  }
}
