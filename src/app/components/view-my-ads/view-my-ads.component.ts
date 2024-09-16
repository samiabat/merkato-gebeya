import { Component } from '@angular/core';

@Component({
  selector: 'app-view-my-ads',
  templateUrl: './view-my-ads.component.html',
  styleUrls: ['./view-my-ads.component.css']
})
export class ViewMyAdsComponent {
  myAds = [
    { title: 'Ad 1', description: 'This is Ad 1', price: 100, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' },
    { title: 'Ad 2', description: 'This is Ad 2', price: 200, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' },
    { title: 'Ad 3', description: 'This is Ad 3', price: 300, image: 'https://mudita.com.np/media/catalog/product/cache/5f4a658faeee583187031a67361d4d52/d/a/dahua-27-inch-qhd-gaming-monitor-price-in-nepal.webp' }
  ];
}
