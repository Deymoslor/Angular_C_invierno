import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnChanges{
  
  @Input() items: CartItem[] = []
  total: number = 0
  
  @Output() idProductEventEmmiter =new EventEmitter();
  
  ngOnChanges(changes: SimpleChanges): void {
    // let itemsChanges = changes['items'];
    this.calculateTotal();
    this.saveSession();
  }
  onDeletCart(id: number){
    this.idProductEventEmmiter.emit(id);
  }

  calculateTotal(): void {
    this.total = this.items.reduce( (accumulator, item) => accumulator + item.quantity * item.product.price, 0);

  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items))
  }
}
