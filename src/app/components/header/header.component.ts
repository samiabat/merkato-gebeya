import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   // These values should be dynamically updated based on your application's state
   cartCount: number = 2; // Example count for items in the cart
   wishlistCount: number = 4; // Example count for items in the wishlist
}
