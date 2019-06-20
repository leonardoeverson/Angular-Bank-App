import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {CadastroClientesComponent} from './cadastro-clientes/cadastro-clientes.component';
import {HomeLogadaComponent} from './home-logada/home-logada.component';
import {AcessoNegadoComponent} from './acesso-negado/acesso-negado.component';
import {AuthGuard} from '../../auth.guard';

const routes: Routes = [{path: '', component: ContentComponent},
    {path: 'cadastro-clientes', component: CadastroClientesComponent},
    {path: 'acesso-negado', component: AcessoNegadoComponent},
    {path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard]}];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
