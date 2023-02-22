import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  doarAlimentos(){
    window.open('https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Alimento','_blank').focus();
  }

  doarRoupas(){
    window.open('https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Roupas','_blank').focus();
  }
  doarSangue(){
    window.open('https://www.google.com/maps/search/?api=1&query=Ponto+Doacao+Sangue','_blank').focus();
  }

}
