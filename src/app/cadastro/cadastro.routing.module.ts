import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { CadastroComponent } from './cadastro.component';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { UsuarioNaoEncontradoComponent } from './usuario-nao-encontrado/usuario-nao-encontrado.component';


const cadastroRoutes: Routes = [
    {path: 'cadastros', component: CadastroComponent},
    {path: 'cadastros/:id', component: CadastroDetalheComponent},
    {path: 'naoEncontrado', component: UsuarioNaoEncontradoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(cadastroRoutes)],
    exports: [RouterModule]
})

export class CadastroRoutingModule {

}