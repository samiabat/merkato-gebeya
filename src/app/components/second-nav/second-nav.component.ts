import { Component } from '@angular/core';

interface Subcategory {
  id: number;
  name: string;
  subcategories?: Subcategory[];
}

interface Category {
  id: number;
  name: string;
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
      subcategoriesOpen: false,
      subcategories: [
        {
          id: 101,
          name: 'Skirts',
          subcategories: [
            { id: 1011, name: 'Short Skirts' },
            { id: 1012, name: 'Long Skirts' }
          ]
        },
        {
          id: 102,
          name: 'Dresses',
          subcategories: [
            { id: 1021, name: 'Casual Dresses' },
            { id: 1022, name: 'Formal Dresses' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Men's Fashion",
      subcategoriesOpen: false,
      subcategories: [
        {
          id: 201,
          name: 'T-Shirts',
          subcategories: [
            { id: 2011, name: 'Casual T-Shirts' },
            { id: 2012, name: 'Formal T-Shirts' }
          ]
        },
        {
          id: 202,
          name: 'Jackets',
          subcategories: [
            { id: 2021, name: 'Casual Jackets' },
            { id: 2022, name: 'Formal Jackets' }
          ]
        }
      ]
    },
    // Add more categories as needed
  ];

  toggleCategories() {
    this.categoriesOpen = !this.categoriesOpen;
  }

  toggleSubcategories(categoryId: number) {
    this.categories = this.categories.map(category => {
      if (category.id === categoryId) {
        category.subcategoriesOpen = !category.subcategoriesOpen;
      }
      return category;
    });
  }
}
