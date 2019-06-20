import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RoutingModule} from './routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent} from './footer/footer.component';
import {CadastroClientesComponent} from './cadastro-clientes/cadastro-clientes.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import {AuthGuard} from '../auth.guard';
import { LoginComponent } from './login/login.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        CadastroClientesComponent,
        HomeLogadaComponent,
        AcessoNegadoComponent,
        LoginComponent,
        CadastroConcluidoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        AppRoutingModule,
        RoutingModule,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
