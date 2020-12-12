import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {first} from 'rxjs/operators';

@Injectable()
export class AutenticacionService {

  constructor(public afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    const resultado = await this.afAuth.signInWithEmailAndPassword(email, password);
    return resultado;
  }

  async registrar(email: string, password: string, name: string) {
    const resultado = await this.afAuth
      .createUserWithEmailAndPassword(email, password);

    //Agrega el nombre
    resultado.user.updateProfile({
      displayName: name
    });

    return resultado;
  }

  async logout() {
    await this.afAuth.signOut();
    console.info('Sesión finalizada correctamente');
  }

  getUsuarioActual() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
