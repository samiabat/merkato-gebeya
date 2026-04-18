import { Component } from '@angular/core';

interface Product {
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

@Component({
  selector: 'app-explore-products',
  templateUrl: './explore-products.component.html',
  styleUrls: ['./explore-products.component.css']
})
export class ExploreProductsComponent {
  exploreProducts: Product[] = [
    { name: 'Breed Dry Dog Food', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80', price: 100, originalPrice: 120, discount: 17, rating: 3.5, reviews: 35 },
    { name: 'CANON EOS DSLR Camera', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80', price: 360, rating: 4, reviews: 95, isNew: true },
    { name: 'ASUS FHD Gaming Laptop', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80', price: 700, originalPrice: 960, discount: 27, rating: 5, reviews: 325 },
    { name: 'Curology Product Set', image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80', price: 500, rating: 4, reviews: 145, isNew: true },
    { name: 'Kids Electric Car', image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&q=80', price: 960, originalPrice: 1160, discount: 17, rating: 5, reviews: 65 },
    { name: 'Jr. Zoom Soccer Cleats', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&q=80', price: 1160, rating: 4, reviews: 35, isNew: true },
    { name: 'GP11 Shift Pro Mouse', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80', price: 660, originalPrice: 960, discount: 31, rating: 4.5, reviews: 55 },
    { name: 'Quilted Satin Jacket', image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80', price: 660, rating: 4.5, reviews: 55 },
    { name: 'Cotton T-Shirt Pack', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', price: 49, originalPrice: 60, discount: 18, rating: 4, reviews: 120 },
    { name: 'Modern Desk Lamp', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80', price: 85, rating: 4.5, reviews: 88, isNew: true },
  ];

  getStars(rating: number): string[] {
    const stars: string[] = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < full) stars.push('fas fa-star');
      else if (i === full && half) stars.push('fas fa-star-half-alt');
      else stars.push('far fa-star');
    }
    return stars;
  }
}
