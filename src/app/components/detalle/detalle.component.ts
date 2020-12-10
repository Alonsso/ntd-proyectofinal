import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() id: number;
  @Input() enlace: any;
  @Input() precio: any;
  @Input() contenido: any;
  @Input() nombre: any;

  constructor() { }

  ngOnInit(): void {
  }

}
