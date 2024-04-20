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
  @Input() idx: number = 0;
  @Output() updateCart = new EventEmitter();
  amount = 0;

  price: number = 0;

  ngOnInit(): void {
    this.price = this.getPriceService.getPrice();
  }

  valueChanged() {
    const index = this.idx;
    this.updateCart.emit({ [index]: this.amount });
  }

  constructor(private getPriceService: GetPriceService) {}
}
