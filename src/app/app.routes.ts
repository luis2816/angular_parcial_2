import { Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { JugadoresComponent } from "./component/componentes/jugadores/jugadores.component";
const APP_ROUTES: Routes=[
  {path: 'jugadores', component: JugadoresComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'jugadores'}
]

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES)