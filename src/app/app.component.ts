import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';

//Array tipo json
informacion: any = [
{codigo:1, Nombre: "Nicolas ", Apellido: "Martinez", Sueldo: 700000},
{codigo:1, Nombre: "Matias ", Apellido: "Gutierrez", Sueldo: 800000},
{codigo:1, Nombre: "Jorge ", Apellido: "Vidal", Sueldo: 900000}]


}
