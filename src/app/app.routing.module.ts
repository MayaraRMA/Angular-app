import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { ClientesGuard } from './guard/clientes.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClientesComponent } from './clientes/clientes.component';



const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    { path: '', component: ClientesComponent,
        canActivate: [AuthGuard],
        canActivateChild: [ClientesGuard],
        canLoad: [AuthGuard]
    },
    {path: 'novo', component: ClienteFormComponent},
    { path: '**', component: PaginaNaoEncontradaComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}