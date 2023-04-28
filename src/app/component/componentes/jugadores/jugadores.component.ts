import { Component, OnInit } from '@angular/core';
import { FutbolLuisFelipeService } from 'src/app/servicios/futbol-luis-felipe.service';
import { Jugador } from './jugador.model';
@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {
  public banderaCard= true;
  public banderaJames= false;
 jugadorSelecionado: Jugador | undefined;
 
 mostarInfoJames(){
  this.banderaJames=!this.banderaJames;
 }

 cambiarEstado(){
  this.jugadorSelecionado= undefined;
  this.banderaCard= !this.banderaCard;
 }
 
  onSelectJugador(jugador: Jugador){
    this.jugadorSelecionado= jugador;
    this.banderaCard= !this.banderaCard;
  }

  jugadores: Jugador[]=[];

  constructor (private _futbolLuisFelipeService: FutbolLuisFelipeService){
    this.banderaCard= _futbolLuisFelipeService.banderaCard;
  }

 ngOnInit(): void{
   this.jugadores=this._futbolLuisFelipeService.getJugadores();
 }
 retornarBandera(){
  return this.banderaCard;
 }

}
