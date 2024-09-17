import { Component } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  selectedCategory: string | null = null;
  selectedSubcategory: string | null = null;

  // Define your categories and subcategories
  subcategories: { [key: string]: string[] } = {
    'Electronics': ['PC', 'Laptop', 'Phone', 'Tablet'],
    'Fashion': ['Men', 'Women', 'Kids'],
    'Home Appliances': ['Refrigerators', 'Microwave', 'Washing Machine']
  };

  // Store categories as a separate array
  categories = Object.keys(this.subcategories);

  // Handle category selection
  onCategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement; // Explicitly cast to HTMLSelectElement
    this.selectedCategory = target.value;
    this.selectedSubcategory = null; // Reset subcategory when category changes
  }

  // Handle subcategory selection
  onSubcategoryChange(event: Event) {
    const target = event.target as HTMLSelectElement; // Explicitly cast to HTMLSelectElement
    this.selectedSubcategory = target.value;
  }
}
