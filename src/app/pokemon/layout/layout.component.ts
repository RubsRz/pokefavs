import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery';

type Tabs = 'tab-pokemons' | 'tab-favoritos' | ''

@Component({
  selector: 'pokemon-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent{

  public currentTab:Tabs;
  public pokemons:any[] = new Array(898);
  public favoritos:any[];
  public screen:boolean = false;
  public buscar: number | undefined;

  constructor() {
    this.currentTab ="tab-pokemons";
    // this.favoritos = [];


    if (localStorage.getItem('favoritos') === null) {
      this.favoritos = [];
      // this.push(task);
      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
    } else {
      this.favoritos = JSON.parse(localStorage.getItem('favoritos')!);
    }
  
  }

  guardar(pos:any){
    let existe;
    existe = this.favoritos.includes(pos);
    
    if(existe){
      this.alertaExistente();
    }else{
      this.favoritos.push(pos);
      this.alertaAgregado();


      localStorage.setItem('favoritos', JSON.stringify(this.favoritos));

    }
  }

  eliminar(pos:any){
    this.favoritos.splice(pos,1)
    this.alertaEliminado();
    localStorage.setItem('favoritos', JSON.stringify(this.favoritos));
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

  changebuscar(){
    if (this.buscar != undefined && this.buscar > 898) {
      this.buscar = 898;
    }
  }

}
