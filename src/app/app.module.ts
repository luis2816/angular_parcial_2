import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//IMPORTAMOS RUTAS
import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/componentes/navbar/navbar.component';
import { FooterComponent } from './component/componentes/footer/footer.component';
import { JugadoresComponent } from './component/componentes/jugadores/jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
