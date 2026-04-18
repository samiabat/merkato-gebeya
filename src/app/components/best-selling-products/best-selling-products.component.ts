import { Component } from '@angular/core';

interface Product {
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-best-selling-products',
  templateUrl: './best-selling-products.component.html',
  styleUrls: ['./best-selling-products.component.css']
})
export class BestSellingProductsComponent {
  bestSellingProducts: Product[] = [
    {
      name: 'The North Face Jacket',
      category: "Men's Outerwear",
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80',
      price: 260, originalPrice: 360, rating: 5, reviews: 65, badge: '-28%', badgeColor: 'bg-red-500'
    },
    {
      name: 'Canon EOS M50 Camera',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80',
      price: 360, originalPrice: 0, rating: 4, reviews: 95, badge: 'HOT', badgeColor: 'bg-orange-500'
    },
    {
      name: 'Gucci Duffle Bag',
      category: "Women's Fashion",
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80',
      price: 960, originalPrice: 1160, rating: 4.5, reviews: 99, badge: '-17%', badgeColor: 'bg-red-500'
    },
    {
      name: 'Nike Air Max 270',
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
      price: 100, originalPrice: 135, rating: 4, reviews: 89, badge: '-26%', badgeColor: 'bg-red-500'
    },
    {
      name: 'Apple iPhone 14 Pro',
      category: 'Smartphones',
      image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&q=80',
      price: 990, rating: 5, reviews: 210, badge: 'NEW', badgeColor: 'bg-green-500'
    },
    {
      name: 'ASUS FHD Gaming Laptop',
      category: 'Computers',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
      price: 700, originalPrice: 960, rating: 4.5, reviews: 35, badge: '-27%', badgeColor: 'bg-red-500'
    },
    {
      name: 'Curology Face Serum',
      category: 'Health & Beauty',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&q=80',
      price: 40, rating: 4, reviews: 88, badge: 'SALE', badgeColor: 'bg-purple-500'
    },
    {
      name: 'Ergonomic Office Chair',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
      price: 375, originalPrice: 400, rating: 5, reviews: 99
    },
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
