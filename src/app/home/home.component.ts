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
export class HomeComponent {}
