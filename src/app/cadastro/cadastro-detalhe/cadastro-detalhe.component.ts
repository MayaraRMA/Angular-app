import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css']
})
export class CadastroDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  cadastro: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastroService: CadastroService,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.cadastro = this.cadastroService.getId(this.id);
      
        if (this.cadastro == null) {
          this.router.navigate(['/naoEncontrado']);
        }
      }
    )
  }

  ngOnDestro() {
    this.inscricao.unsubscribe();
  }
}
