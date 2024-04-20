import { CommonModule } from '@angular/common';
import { GetPriceService } from './../get-price.service';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent implements OnInit {
  @Input() displayName = '';
  @Input() description = '';
  @Output() updateCart = new EventEmitter();
  amount = 0;

  price: number = 0;

  ngOnInit(): void {
    this.price = this.getPriceService.getPrice();
  }

  valueChanged() {
    this.updateCart.emit(this.amount);
  }

  constructor(private getPriceService: GetPriceService) {}
}
