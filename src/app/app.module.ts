import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { ClientesModule } from './clientes/clientes.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { ClientesGuard } from './guard/clientes.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClientesModule,
    AppRoutingModule,
  ],
  providers: [
  AuthService, 
  AuthGuard,
  ClientesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
