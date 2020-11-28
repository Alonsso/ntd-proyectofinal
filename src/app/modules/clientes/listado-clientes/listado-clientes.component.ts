import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
  providers: [AutenticacionService]
})
export class ListadoClientesComponent implements OnInit {

  clientesTodos: any[] = [];
  emailUsuarioActual: any;

  constructor(private clienteService: ClientesService,
              private autenticacion: AutenticacionService) {
    clienteService.clientesRef.valueChanges().subscribe(clientes => {
      this.clientesTodos = clientes;
    });
    this.recuperarCorreo();
  }


  async recuperarCorreo(){
    this.emailUsuarioActual = (await this.autenticacion.getUsuarioActual()).email;
  }

  deleteCliente(cliente: Cliente): void {
    this.clienteService.deleteOne(cliente);
  }

  ngOnInit(): void {
  }

}
