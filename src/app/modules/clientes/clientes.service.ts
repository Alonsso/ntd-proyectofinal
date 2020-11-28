import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Categoria, Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private dbPath = '/clientes';
  private dbPathCategories = '/categorias';

  clientesRef: AngularFireList<Cliente> = null;
  categoriasRef: any;

  constructor(private db: AngularFireDatabase) {
    this.clientesRef = db.list(this.dbPath);
    this.categoriasRef = db.list(this.dbPathCategories);
    const categoriasRefe = db.database.ref('categorias');
    categoriasRefe.set([
      {
        id: 1,
        nombre: 'Antiguo'
      },
      {
        id: 2,
        nombre: 'Nuevo'
      }
    ]);
  }

  deleteOne(cliente: Cliente): Promise<void> {
    return this.clientesRef.remove(cliente.key);
  }

  getAllCategorias(): AngularFireList<Categoria> {
    return this.categoriasRef;
  }

  getAll(): AngularFireList<Cliente> {
    return this.clientesRef;
  }

  create(cliente: Cliente): any {
    return this.clientesRef.push(cliente);
  }

  update(key: string, value: any): Promise<void> {
    return this.clientesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.clientesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.clientesRef.remove();
  }

}
