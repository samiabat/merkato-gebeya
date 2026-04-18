import { Component } from '@angular/core';

interface Category {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-browse-category',
  templateUrl: './browse-category.component.html',
  styleUrls: ['./browse-category.component.css']
})
export class BrowseCategoryComponent {
  categories: Category[] = [
    { name: "Women's Fashion", icon: 'fas fa-female' },
    { name: "Men's Fashion", icon: 'fas fa-male' },
    { name: 'Phones', icon: 'fas fa-mobile-alt' },
    { name: 'Laptops', icon: 'fas fa-laptop' },
    { name: 'Cameras', icon: 'fas fa-camera' },
    { name: 'Headphones', icon: 'fas fa-headphones' },
    { name: 'Smart Watches', icon: 'fas fa-clock' },
    { name: 'Furniture', icon: 'fas fa-couch' },
    { name: 'Sports', icon: 'fas fa-running' },
    { name: 'Groceries', icon: 'fas fa-shopping-basket' },
    { name: 'Health & Beauty', icon: 'fas fa-heartbeat' },
    { name: 'Baby & Toys', icon: 'fas fa-baby' },
    { name: 'Automotive', icon: 'fas fa-car' },
    { name: 'Books', icon: 'fas fa-book' },
    { name: 'Jewelry', icon: 'fas fa-gem' },
    { name: 'Stationery', icon: 'fas fa-pencil-alt' },
  ];
}
