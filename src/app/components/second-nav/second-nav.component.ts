import { Component } from '@angular/core';

interface Subcategory {
  id: number;
  name: string;
  subcategories?: Subcategory[];
}

interface Category {
  id: number;
  name: string;
  icon: string;
  subcategoriesOpen?: boolean;
  subcategories: Subcategory[];
}

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.css']
})
export class SecondNavComponent {
  categoriesOpen = false;
  categories: Category[] = [
    {
      id: 1,
      name: "Women's Fashion",
      icon: 'fas fa-female',
      subcategoriesOpen: false,
      subcategories: [
        { id: 101, name: 'Dresses' },
        { id: 102, name: 'Tops & Blouses' },
        { id: 103, name: 'Shoes' },
        { id: 104, name: 'Bags & Accessories' },
      ]
    },
    {
      id: 2,
      name: "Men's Fashion",
      icon: 'fas fa-male',
      subcategoriesOpen: false,
      subcategories: [
        { id: 201, name: 'T-Shirts & Shirts' },
        { id: 202, name: 'Trousers & Jeans' },
        { id: 203, name: 'Shoes' },
        { id: 204, name: 'Jackets & Coats' },
      ]
    },
    {
      id: 3,
      name: 'Electronics',
      icon: 'fas fa-laptop',
      subcategoriesOpen: false,
      subcategories: [
        { id: 301, name: 'Phones & Tablets' },
        { id: 302, name: 'Laptops & Computers' },
        { id: 303, name: 'Cameras & Photography' },
        { id: 304, name: 'Audio & Headphones' },
      ]
    },
    {
      id: 4,
      name: 'Home & Lifestyle',
      icon: 'fas fa-couch',
      subcategoriesOpen: false,
      subcategories: [
        { id: 401, name: 'Furniture' },
        { id: 402, name: 'Kitchen & Dining' },
        { id: 403, name: 'Bedding & Bath' },
        { id: 404, name: 'Home Decor' },
      ]
    },
    {
      id: 5,
      name: 'Sports & Outdoor',
      icon: 'fas fa-running',
      subcategoriesOpen: false,
      subcategories: [
        { id: 501, name: 'Fitness Equipment' },
        { id: 502, name: 'Outdoor Gear' },
        { id: 503, name: 'Sports Clothing' },
      ]
    },
    {
      id: 6,
      name: "Baby's & Toys",
      icon: 'fas fa-baby',
      subcategoriesOpen: false,
      subcategories: [
        { id: 601, name: 'Baby Clothing' },
        { id: 602, name: 'Toys & Games' },
        { id: 603, name: 'Baby Gear' },
      ]
    },
    {
      id: 7,
      name: 'Groceries & Pets',
      icon: 'fas fa-shopping-basket',
      subcategoriesOpen: false,
      subcategories: [
        { id: 701, name: 'Fresh Produce' },
        { id: 702, name: 'Pet Food & Supplies' },
        { id: 703, name: 'Snacks & Beverages' },
      ]
    },
    {
      id: 8,
      name: 'Health & Beauty',
      icon: 'fas fa-heartbeat',
      subcategoriesOpen: false,
      subcategories: [
        { id: 801, name: 'Skin Care' },
        { id: 802, name: 'Hair Care' },
        { id: 803, name: 'Vitamins & Supplements' },
        { id: 804, name: 'Personal Care' },
      ]
    },
  ];

  toggleCategories() {
    this.categoriesOpen = !this.categoriesOpen;
  }

  toggleSubcategories(categoryId: number) {
    this.categories = this.categories.map(category => ({
      ...category,
      subcategoriesOpen: category.id === categoryId ? !category.subcategoriesOpen : false
    }));
  }
}

