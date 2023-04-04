import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent {
  peso : number = 0;
  altura : number = 0;
  imc : number = 0;

  calcular(){
    this.imc = this.peso / (this.altura * this.altura);

    if(this.imc < 18.5){

      alert("MAGRO, SUA OBESIDADE É 0");
       }

   else if(this.imc > 18.5 && this.imc < 24.9) {

      alert("NORMAL, SUA OBESIDADE É 0");

  }

      else if(this.imc > 25 && this.imc < 29.9){

          alert("SOBREPESO, SUA OBESIDADE É 1");

 }

       else if(this.imc > 30 && this.imc < 39.9){

          alert("TA OBESO, SUA OBESIDADE É 2");

  }

   else if (this.imc > 40){

      alert("OBESIDADE GRAVE, SUA OBESIDADE É 3");

 } else{
  alert("não tem numero pra calcula!");
 }
  }
}
