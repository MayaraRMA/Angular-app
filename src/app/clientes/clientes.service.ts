import { Injectable } from '@angular/core';

@Injectable()
export class ClientesService {

  private contador: number = 3;
  private clientes: any[] = [
    {
      id: 1, 
      nome: 'Aluno 01',
      cep: 'cep',
      estado: 'estado',
      cidade: 'cidade',
      endereco: 'endereco'
    },
    {
      id: 2, 
      nome: 'Aluno 02', 
      cep: 'cep',
      estado: 'estado',
      cidade: 'cidade',
      endereco: 'endereco'
    },
    {
      id: 3, 
      nome: 'Aluno 03', 
      cep: 'cep',
      estado: 'estado',
      cidade: 'cidade',
      endereco: 'endereco'
    },
  ]
  getClientes() {
    return this.clientes;
  }

  getCliente(id: number) {
    for(let i=0; i<this.clientes.length; i++) {
      let cliente = this.clientes[i];
      if (cliente.id == id) {
        return cliente;
      }
    }
  }

  deleteCliente(id: number){
    for(let i=0; i<this.clientes.length; i++) {
      let cliente = this.clientes[i];
      if (cliente.id == id) {
        return this.clientes.splice(i, 1);
      }
    }
  }

  postCliente(newCliente: any) {
    newCliente = {
      id: this.contador + 1, 
      nome: newCliente.nome,
      cep: newCliente.cep,
      estado: newCliente.estado,
      cidade: newCliente.cidade,
      endereco: newCliente.endereco,
    }

    this.clientes.push(newCliente)
  }
  constructor() { }
}
