import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ClientesService } from '../clientes.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  private clientes: any[] = [];

  @Input () nome:  string;
  @Input () cep:  string;
  @Input () estado:  string;
  @Input () cidade:  string;
  @Input () endereco:  string;

  cliente: any = {
    nome: this.nome,
    cep: this.cep,
    estado: this.estado,
    cidade: this.cidade,
    endereco: this.endereco
  };

  inscricao = Subscription;

  
  constructor(
    private route: ActivatedRoute,
    private clientesService: ClientesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }

  onSubmit(form){
    let newCliente = this.cliente;
    this.clientesService.postCliente(newCliente);
    this.router.navigate(['/']);
    console.log(newCliente)
  }

}
