import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = [
    {
      id: 1,
      name: 'Electronics',
      subcategories: [
        { id: 11, name: 'Laptops', subcategories: [] },
        { id: 12, name: 'Smartphones', subcategories: [] },
        { id: 13, name: 'Cameras', subcategories: [] }
      ]
    },
    {
      id: 2,
      name: 'Fashion',
      subcategories: [
        { id: 21, name: 'Men\'s Clothing', subcategories: [] },
        { id: 22, name: 'Women\'s Clothing', subcategories: [] },
        { id: 23, name: 'Footwear', subcategories: [] }
      ]
    },
    {
      id: 3,
      name: 'Home & Living',
      subcategories: [
        { id: 31, name: 'Furniture', subcategories: [] },
        { id: 32, name: 'Decor', subcategories: [] },
        { id: 33, name: 'Kitchenware', subcategories: [] }
      ]
    }
  ];

  // Method to fetch categories
  getCategories() {
    return this.categories;
  }

  // Example of fetching brands based on category
  getBrandsByCategory(categoryId: number) {
    // Fetching brands based on the selected category
    if (categoryId === 1) {
      return ['Samsung', 'Apple', 'Dell', 'Sony'];
    } else if (categoryId === 2) {
      return ['Gucci', 'Nike', 'Adidas'];
    } else {
      return [];
    }
  }
}
