import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id: number;
  enlace: any;
  precio: any;
  contenido: any;
  nombre: any;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.get('id');
      this.enlace = params.get('enlace');
      this.precio = params.get('precio');
      this.contenido = params.get('contenido');
      this.nombre = params.get('nombre');
    });
  }
}
