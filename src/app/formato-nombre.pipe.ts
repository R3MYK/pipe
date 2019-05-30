import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarcurso'
})
export class FormatoNombrePipe implements PipeTransform {

//Parametros de formato Pipe creado por consola
  transform(parametro1: string, parametro2: string): any {
    return "["+ parametro1 + " -- " +  parametro2 + "]";
  }

}
