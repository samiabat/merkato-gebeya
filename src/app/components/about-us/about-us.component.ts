import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  stats = [
    { value: '10.5K+', label: 'Active Sellers', icon: 'fas fa-store' },
    { value: '300+', label: 'Top Brands', icon: 'fas fa-award' },
    { value: '3M+', label: 'Happy Customers', icon: 'fas fa-users' },
    { value: '1M+', label: 'Products Listed', icon: 'fas fa-box-open' },
  ];

  values = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Secure Shopping',
      description: 'All transactions are protected with SSL encryption. Shop with confidence knowing your data is safe.'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: 'Fast Delivery',
      description: 'Same-day delivery in Addis Ababa and 2–3 day delivery to all major Ethiopian cities.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Trusted Sellers',
      description: 'Every seller is verified. We maintain strict quality standards so you get what you pay for.'
    },
    {
      icon: 'fas fa-undo-alt',
      title: 'Easy Returns',
      description: 'Not satisfied? Return any product within 30 days, no questions asked.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Our customer support team is available round the clock to help you with any issue.'
    },
    {
      icon: 'fas fa-tags',
      title: 'Best Prices',
      description: 'We work with our sellers to ensure you always get competitive prices and great deals.'
    },
  ];

  team = [
    {
      name: 'Abebe Girma',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    },
    {
      name: 'Tigist Haile',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
    },
    {
      name: 'Dawit Bekele',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
    },
    {
      name: 'Sara Teshome',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
    },
  ];
}
