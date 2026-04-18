import { Component } from '@angular/core';

interface Arrival {
  name: string;
  description?: string;
  image: string;
}

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent {
  heroArrival: Arrival = {
    name: 'PlayStation 5',
    description: "Black and White version of the PlayStation 5 and Headphones. Next-gen gaming experience.",
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&q=80',
  };

  sideArrivals: Arrival[] = [
    {
      name: "Women's Collections",
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
    },
    {
      name: 'Speakers & Audio',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
    },
    {
      name: 'Perfume & Fragrance',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&q=80',
    },
    {
      name: 'Men\'s Watches',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80',
    },
  ];
}
