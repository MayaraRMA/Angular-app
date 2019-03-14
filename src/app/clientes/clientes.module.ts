import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ClientesComponent } from './clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClientesRoutingModule } from './clientes.routing.module';
import { ClientesService } from './clientes.service';



@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        ClientesRoutingModule,
    ],
    exports: [],
    declarations: [
        ClientesComponent,
        ClienteFormComponent,
        ClienteDetalheComponent
    ],
    providers: [
        ClientesService
    ],
})

export class ClientesModule {

}