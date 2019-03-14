import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private clientes: any[] = [];
  cliente: any;
  inscricao: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService
    ) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.cliente = this.clientesService.getCliente(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato(id) {
    this.router.navigate(['/', this.cliente.id]);
  }

  exluirContato(id) {
    this.clientesService.deleteCliente(id);
  }


}
