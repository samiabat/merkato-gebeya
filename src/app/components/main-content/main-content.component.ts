import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
}

interface SidebarCategory {
  name: string;
  icon: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: ReturnType<typeof setInterval> | null = null;

  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
      badge: 'Limited Time Offer',
      title: 'Up to 40% Off on Electronics',
      subtitle: 'Shop the latest gadgets and tech at unbeatable prices. Free delivery on orders over 500 ETB.',
    },
    {
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
      badge: "New Season Arrivals",
      title: 'Trendy Fashion for Everyone',
      subtitle: 'Discover the latest styles in women\'s and men\'s fashion from top local and international brands.',
    },
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      badge: 'Best Sellers',
      title: 'Home & Kitchen Essentials',
      subtitle: 'Transform your living space with premium home goods and modern kitchen appliances.',
    },
  ];

  sidebarCategories: SidebarCategory[] = [
    { name: "Women's Fashion", icon: 'fas fa-female' },
    { name: "Men's Fashion", icon: 'fas fa-male' },
    { name: 'Electronics', icon: 'fas fa-laptop' },
    { name: 'Home & Lifestyle', icon: 'fas fa-couch' },
    { name: 'Sports & Outdoor', icon: 'fas fa-running' },
    { name: "Baby's & Toys", icon: 'fas fa-baby' },
    { name: 'Groceries & Pets', icon: 'fas fa-shopping-basket' },
    { name: 'Health & Beauty', icon: 'fas fa-heartbeat' },
  ];

  features: Feature[] = [
    { icon: 'fas fa-shipping-fast', title: 'Fast Delivery', desc: 'Addis Ababa & beyond' },
    { icon: 'fas fa-undo-alt', title: 'Easy Returns', desc: '30-day return policy' },
    { icon: 'fas fa-shield-alt', title: 'Secure Payment', desc: 'SSL encrypted checkout' },
    { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Always here to help' },
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
