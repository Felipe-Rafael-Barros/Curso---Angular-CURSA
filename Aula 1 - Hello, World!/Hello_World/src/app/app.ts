import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component'; //Importa de onde a class component está
import { MeuPrimeiro2 } from './meu-primeiro2/meu-primeiro2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuPrimeiroComponent, MeuPrimeiro2], //Tenho que importar meu Component para usalo na principal
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Hello_World';
}
