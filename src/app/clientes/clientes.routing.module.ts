import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ClientesComponent } from './clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';


const clientesRoutes= [
    {path: '', component: ClientesComponent, children: [
        //{path: '/:id', component: ClienteFormComponent},
    ]},
]


@NgModule({
    imports: [RouterModule.forChild(clientesRoutes)],
    exports: [RouterModule]
})

export class ClientesRoutingModule {

}