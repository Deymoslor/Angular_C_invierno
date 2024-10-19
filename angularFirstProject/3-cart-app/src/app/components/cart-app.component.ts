import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../models/cartItem';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { SharingDataService } from '../services/sharing-data.service';

import Swal from 'sweetalert2'
import { Store } from '@ngrx/store';
import { ItemsState } from '../store/items.reducer';
import { add, remove, total } from '../store/items.actions';

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [ CatalogComponent, CartComponent, NavbarComponent, RouterOutlet ],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit{

  items: CartItem[] = []

  constructor(
    private store: Store<{ items: ItemsState}>,
    private router: Router,
    private sharindDataService: SharingDataService, 
    private service: ProductService){
      this.store.select('items').subscribe(state => {
        this.items = state.items;
        this.saveSession();
        console.log('Cambio el estado!')
      })
  }
  ngOnInit(): void {
    // this.store.dispatch(total())
    this.store.dispatch(total());
    this.onDeleteCart();
    this.onAddCart();
  }

  onAddCart(): void {
    this.sharindDataService.productEventEmitter.subscribe(product => {
      
      this.store.dispatch(add( {product }));
      this.store.dispatch(total())
      this.router.navigate(['/cart'], {
        state: {items: this.items}
      });
      Swal.fire({
        title: "Shopping",
        text: "Nuevo Producto agregado!",
        icon: "success"
      });
    });
  }

  onDeleteCart(): void {
    this.sharindDataService.idProductEventEmmiter.subscribe( id => {
      console.log(id + ' Se a ejecutado el evento idProductEventEmmiter')
      Swal.fire({
        title: "¿Estas seguro?",
        text: "Cuidado el item no volvera!!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          this.store.dispatch(remove({id: id}));
          this.store.dispatch(total())
          
          this.router.navigateByUrl('', { skipLocationChange: true}).then(() => {
            this.router.navigate(['/cart']);
          })
          Swal.fire({
            title: "Eliminado!",
            text: "Se ha eliminado.",
            icon: "success"
          });
        }
      });
    })
  }

  saveSession(): void {
    sessionStorage.setItem('cart', JSON.stringify(this.items))
  }

}
