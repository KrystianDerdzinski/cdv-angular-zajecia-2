import { GetPriceService } from './../get-price.service';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent implements OnInit {
  @Input() displayName = '';
  @Input() description = '';
  amount = 0;

  price: number = 0;

  ngOnInit(): void {
    this.price = this.getPriceService.getPrice();
  }

  constructor(private getPriceService: GetPriceService) {}
}
