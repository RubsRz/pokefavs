import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  cont:number

  constructor() {
    this.cont=0;
  }

  ngOnInit(): void {
  }

  sumar(){
    this.cont++;
  }

  restar(){
    this.cont--;
  }

}
