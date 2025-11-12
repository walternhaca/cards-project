import { Component } from '@angular/core';

interface Plan {
  type: string,
  price: number,
  style: 'orange' | 'purple'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  plans: Plan[] = [
    {
      type: "Simples",
      price: 100,
      style: 'orange'
    },
    {
      type: "Completo",
      price: 200,
      style: 'purple'
    },
  ]

  onCardButtonClicked(type: string) {
    console.log('onCardButtonClicked', type)
    // Chamada HTTP
  }
}