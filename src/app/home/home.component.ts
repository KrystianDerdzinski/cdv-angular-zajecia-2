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
  addShadow($event: Event) {
    const target = $event.target as HTMLElement;
    target.classList.add('has-shadow');
  }
  removeShadow($event: Event) {
    const target = $event.target as HTMLElement;
    target.classList.remove('has-shadow');
  }
}

// uzywajac (mouseenter) i (mouseout) dodaj drop-shadow przy najechaniu kursorem na item-card
// 1. przy mouseenter na app-item-card
// dodajemy do niego klase has-shadow
// przy mouseout usuwamy klase has-shadow
