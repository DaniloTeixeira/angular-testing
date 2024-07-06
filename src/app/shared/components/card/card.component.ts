import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../../types/product.inteface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  product: Product | null = null;

  @Input()
  isManageable = false;

  @Output() onDelete = new EventEmitter<Product | null>();

  @Output() onEdit = new EventEmitter<Product | null>();

  onDeleteClick(): void {
    this.onDelete.emit(this.product);
  }

  onEditClick(): void {
    this.onEdit.emit(this.product);
  }
}
