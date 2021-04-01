import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitán América';

  nombre2:string = 'rodrIgO lAgunA';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI:number = Math.PI;

  porcentaje:number = 0.234;

  salario:number = 1234.5;

  fecha:Date = new Date();

  activar:boolean = true;

  idioma:string = 'es';

  videoUrl:string = 'https://www.youtube.com/embed/K6XsI0svtwE';

  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle:'Primera',
      casa:20
    }
  };

  valorPromesa = new Promise<string>( (resolve) =>{
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  
  cambiarIdioma(idioma:string){
    if (idioma == 'en') {
      this.idioma = 'en';
    }else if(idioma == 'fr'){
      this.idioma = 'fr';
    }
    else{
      this.idioma = 'es';
    }
  }

}
