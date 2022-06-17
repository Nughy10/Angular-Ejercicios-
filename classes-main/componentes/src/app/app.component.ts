import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = "Esta es mi aplicación con componentes";
  public edad: number = 32;
  public vivo: boolean = true;
  public comidas: string[] = ["pan", "tomate", "galletas"]
  public superheroe: {} = {
    name: "Spiderman",
    realName: "Peter Parker",
    alive: true
  }
}
