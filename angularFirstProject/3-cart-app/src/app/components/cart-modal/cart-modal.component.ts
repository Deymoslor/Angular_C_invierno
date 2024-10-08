import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html'
})
export class CartModalComponent {

  @Input() items: CartItem[] = []
  // @Input() total: number = 0


  @Output() idProductEventEmmiter =new EventEmitter();
  @Output() openEventEmmiter = new EventEmitter();

  openCloseCart(): void{
    this.openEventEmmiter.emit(0)
  }
  onDeleteCart(id: number){
    this.idProductEventEmmiter.emit(id);
  }
}
