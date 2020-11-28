import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;
  categoriasTodas: any;

  constructor(private clienteService: ClientesService) {
    this.categoriasTodas = this.clienteService.categoriasRef;
    clienteService.categoriasRef.valueChanges().subscribe(categorias => {
      this.categoriasTodas = categorias;
    });
  }

  ngOnInit(): void {
  }

  saveCliente(): void {
    this.clienteService.create(this.cliente).then(() => {
      console.log('Nuevo cliente creado');
      this.submitted = true;
    });
  }

  newCliente(): void{
    this.submitted = false;
    this.cliente = new Cliente();
  }

}
