import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

type Tabs = 'tab-pokemons' | 'tab-favoritos' | ''

@Component({
  selector: 'pokemon-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent{

  public currentTab:Tabs;
  public pokemons:any[] = new Array(50);
  public favoritos:any[];
  public screen:boolean = false;

  constructor() {
    this.currentTab ="tab-pokemons";
    this.favoritos = [];

    // if(this.currentTab == "tab-pokemons"){
    //   document.getElementById("tabp")?.setAttribute("color", "red");
    // }
    // else{
    //   document.getElementById("tabf")?.setAttribute("color", "red");
    // }

  }

  guardar(pos:any){
    let existe;
    existe = this.favoritos.includes(pos);
    
    if(existe){
      this.alertaExistente();
    }else{
      this.favoritos.push(pos);
      this.alertaAgregado();
    }
  }

  eliminar(pos:any){
    this.favoritos.splice(pos,1)
    this.alertaEliminado();
  }

  alertaAgregado(){
    $('#alertaAgregado').show();
    setTimeout(function(){
      $('#alertaAgregado').hide();
    }, 1000);
  }

  alertaExistente(){
    $('#alertaExistente').show();
    setTimeout(function(){
      $('#alertaExistente').hide();
    }, 1000);
  }

  alertaEliminado(){
    $('#alertaEliminado').show();
    setTimeout(function(){
      $('#alertaEliminado').hide();
    }, 1000);
  }



}
