import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    // Sample cart data, replace with your dynamic data
    product1 = { id: 1, name: 'LCD Monitor', price: 650, quantity: 1 };
    product2 = { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2 };

    // Function to increase quantity
    increaseQuantity(product: any) {
      product.quantity++;
    }

    // Function to decrease quantity (ensure it doesn't go below 1)
    decreaseQuantity(product: any) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    }
}
