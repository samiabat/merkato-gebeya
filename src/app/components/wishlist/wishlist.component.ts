import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

    // Example wishlist items (replace with your actual data)
    wishlistItems = [
      { id: 1, name: 'Gucci duffle bag', price: 960, oldPrice: 1160, discount: 35, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' },
      { id: 2, name: 'RGB liquid CPU Cooler', price: 1960, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' },
      { id: 3, name: 'GP11 Shooter USB Gamepad', price: 550, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' },
      { id: 4, name: 'Quilted Satin Jacket', price: 750, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' }
    ];

    // Example recommended products (replace with your actual data)
    recommendedProducts = [
      { id: 5, name: 'Laptop Backpack', price: 99, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp"' },
      { id: 6, name: 'LCD Gaming Monitor', price: 650, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' },
      { id: 7, name: 'Gaming Mouse', price: 50, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' },
      { id: 8, name: 'Mechanical Keyboard', price: 120, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' }
    ];

    // Move a single item to cart
    addToCart(item: any) {
      console.log('Add to cart:', item);
      // Logic to move the item from wishlist to cart
    }

    // Remove a single item from wishlist
    removeFromWishlist(item: any) {
      console.log('Remove from wishlist:', item);
      this.wishlistItems = this.wishlistItems.filter(i => i.id !== item.id);
    }

    // Move all items to cart
    moveAllToCart() {
      console.log('Move all to cart');
      this.wishlistItems.forEach(item => {
        this.addToCart(item);
      });
      this.wishlistItems = []; // Clear the wishlist after moving all to cart
    }
}
