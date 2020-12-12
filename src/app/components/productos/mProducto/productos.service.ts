import {AngularFireDatabase} from '@angular/fire/database';
import {Injectable} from '@angular/core';
import {Producto} from './producto.model';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  producto: Producto;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private route: Router) {
  }

  getAllProductos() {
    return this.afs.collection('productos').snapshotChanges();
  }

  getAllCategorias() {
    return this.afs.collection('categorias').snapshotChanges();
  }

  get(id: any) {
    return this.afs.collection('productos').doc(id).valueChanges();
  }

}
