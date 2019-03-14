import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CadastroComponent } from './cadastro.component';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { UsuarioNaoEncontradoComponent } from './usuario-nao-encontrado/usuario-nao-encontrado.component';
import { CadastroService } from './cadastro.service';
import { CadastroRoutingModule } from './cadastro.routing.module';



@NgModule({
    imports: [
        CommonModule,
        CadastroRoutingModule
    ],
    exports: [],
    declarations: [
        CadastroComponent,
        CadastroDetalheComponent,
        UsuarioNaoEncontradoComponent,
    ],
    providers: [
        CadastroService,
    ],
})

export class CadastroModule {

}