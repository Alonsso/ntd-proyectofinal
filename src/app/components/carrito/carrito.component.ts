import { IItem } from './../../models/item.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cartItems: IItem[] = [];
  uid: string;
  toPay: number;

  constructor(
    private cartService: CartService,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.angularFireAuth
      .user
      .subscribe(user => {
        this.uid = user?.uid;
        this.cartItems = this.cartService.get(this.uid);
      });
  }

  sum(): number {
    var suma = 0;
    for(let i = 0; i < this.cartItems.length; i++) {
      suma += (this.cartItems[i].precio * this.cartItems[i].cantidad);
    }
    return suma;
  }

  pay() {
    this.cartService.pay(this.uid);
  }

}
