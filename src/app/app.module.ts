import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaPersonalComponent } from './components/tabla-personal/tabla-personal.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DetallesPersonalComponent } from './pages/detalles-personal/detalles-personal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormularioComponent,
    TablaPersonalComponent,
    HomeComponent,
    PersonalComponent,
    NosotrosComponent,
    AdministracionComponent,
    DetallesPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
