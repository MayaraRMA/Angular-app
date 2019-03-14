import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {


  getCadastro() {
    return [
      {id: 1, nome: 'Mayara'},
      {id: 2, nome: 'LF'}
    ];
  }

  getId(id: number){
    let cadastros = this.getCadastro();
    for(let i=0; i<cadastros.length; i++){
      let cadastro = cadastros[i];
      if (cadastro.id == id) {
        return cadastro;
      }
    }
    return null;
  }
  constructor() { }
}
