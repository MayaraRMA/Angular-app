import { Component, OnInit } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastros: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.cadastros = this.cadastroService.getCadastro();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.router.navigate(['/cadastros'], 
    {queryParams: {'pagina': ++this.pagina}});
  }
}
