import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ItemCardComponent } from '../item-card/item-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ItemCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  totalItemsInCart: { [id: string]: number } = {
    0: 0,
    1: 0,
    2: 0,
  };

  totalItemsInCartCount = 0;

  addShadow($event: Event) {
    const target = $event.target as HTMLElement;
    target.classList.add('has-shadow');
  }
  removeShadow($event: Event) {
    const target = $event.target as HTMLElement;
    target.classList.remove('has-shadow');
  }

  // { 1: 6 }

  updateBasket($event: { [id: string]: number }) {
    $event = { 1: 6 };
    const key = Object.keys($event)[0];
    const value = Object.values($event)[0];
    this.totalItemsInCart[key] = value;

    this.totalItemsInCartCount = Object.values(this.totalItemsInCart).reduce(
      (acc, item) => acc + item
    );
  }
}
