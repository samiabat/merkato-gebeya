import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   // These values should be dynamically updated based on your application's state
   cartCount: number = 2; // Example cart count
    wishlistCount: number = 4; // Example wishlist count
    profileNotifications: number = 1; // Example profile notification countcls

     // Use ViewChild to get a reference to the mobile menu element
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  toggleMobileMenu() {
    const menu = this.mobileMenu.nativeElement;
    menu.classList.toggle('hidden');
  }
}
