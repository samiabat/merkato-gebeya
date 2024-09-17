// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Gaming Laptop', price: 1500, category: 'Electronics', subcategory: 'Laptop', imageUrl: 'laptop.jpg' },
    { id: 2, name: 'Smartphone', price: 900, category: 'Electronics', subcategory: 'Phone', imageUrl: 'phone.jpg' },
    { id: 3, name: 'Desktop PC', price: 1200, category: 'Electronics', subcategory: 'PC', imageUrl: 'pc.jpg' },
    { id: 4, name: 'Tablet', price: 400, category: 'Electronics', subcategory: 'Phone', imageUrl: 'tablet.jpg' },
    // Add more products here...
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  filterProducts(category: string, subcategory: string): Product[] {
    return this.products.filter(product => 
      product.category === category && (subcategory === '' || product.subcategory === subcategory)
    );
  }
}
