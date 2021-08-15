import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-databindings',
  templateUrl: './demo-databindings.component.html',
  styles: [
  ]
})
export class DemoDatabindingsComponent {

  public contadorClique: number = 0;
  public urlImagem: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png";
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  // KeyUp(event: any){
  //   this.nome = event.target.value;
  // }

}
