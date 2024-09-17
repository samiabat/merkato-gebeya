import { Component } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  selectedCategory: string | null = null;
  selectedSubcategory: string | null = null;

  // Define your categories and subcategories here
  subcategories: { [key: string]: string[] } = {
    'Electronics': ['PC', 'Laptop', 'Phone', 'Tablet'],
    'Fashion': ['Men', 'Women', 'Kids'],
    'Home Appliances': ['Refrigerators', 'Microwave', 'Washing Machine']
  };

  // Handle category selection
  onCategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    this.selectedSubcategory = null; // Reset subcategory when category changes
  }

  // Handle subcategory selection
  onSubcategoryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedSubcategory = selectElement.value;
  }
}
