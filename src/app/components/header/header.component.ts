import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartCount: number = 2;
  wishlistCount: number = 4;
  profileNotifications: number = 1;
  mobileMenuOpen = false;
  searchQuery = '';

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      // Navigate to explore products or search results
      this.router.navigate(['/home'], { queryParams: { q: this.searchQuery.trim() } });
    }
  }
}

