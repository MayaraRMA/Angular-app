import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome == 'Teste' &&
    usuario.senha == 'Teste123') {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);

    } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
