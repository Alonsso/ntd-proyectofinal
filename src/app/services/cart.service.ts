import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { IItem } from '../models/item.interface';
import { v4 as Uuidv4Module } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cart = 'cart';
  private items = 'items';
  private orders = 'orders';

  constructor(
    private angularFirestore: AngularFirestore
  ) { }


  //Insertar en la base de datos

  add(uid: string, item: IItem) {

    this.angularFirestore
      .collection(this.cart)
      .doc(uid)
      .collection(this.items)
      .add({
          id: item.id,
          nombre: item.nombre,
          precio: item.precio,
          categoria: item.categoria,
          marca: item.marca,
          peso: item.peso,
          image: item.image,
          cantidad: item.cantidad
        });
  }

  get(uid: string): IItem[] {

    let cartItems: IItem[] = [];

    const cart = this.angularFirestore
      .collection(this.cart)
      .doc(uid)
      .collection(this.items)
      .get();

    cart.subscribe((items) => {
      items.docs.forEach(item => {
        //console.log(item.data());
        cartItems.push({
          id: item.data().id,
          nombre: item.data().nombre,
          precio: item.data().precio,
          categoria: item.data().categoria,
          marca: item.data().marca,
          peso: item.data().peso,
          image: item.data().image,
          cantidad: item.data().cantidad
        });
      });
    })

    /*
    console.log("####### Service #######");
    console.log(uid);
    console.log(cartItems);
    console.log("####### Service #######");
    */

    return cartItems;

  }

  //agregar los datos de contacto pay(uid: string, direccion: string, telefono: string)
  pay(uid: string) {

    const order = this.generateOrder();

    const cart = this.angularFirestore
      .collection(this.cart)
      .doc(uid)
      .collection(this.items)
      .get();

    this.angularFirestore
      .collection(this.orders)
      .doc(order)
      .set({
        uid: uid //agregar aqui los datos de contacto direccion y telefono
      }, {
        merge: true
      });

    cart.subscribe((items) => {
      items.docs.forEach(item => {

        this.angularFirestore
          .collection(this.orders)
          .doc(order)
          .collection(this.items)
          .add({
            id: item.data().id,
            nombre: item.data().nombre,
            precio: item.data().precio,
            categoria: item.data().categoria,
            marca: item.data().marca,
            peso: item.data().peso,
            image: item.data().image,
            cantidad: item.data().cantidad
          });

        item.ref.delete()
        .then()
        .catch();

        });

      });
  }

  generateOrder(): string {
    const replaceCharacter = /\-/gi
    return Uuidv4Module().toString().replace(replaceCharacter, '')
  }

}
