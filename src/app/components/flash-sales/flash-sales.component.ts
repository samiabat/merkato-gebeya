import { Component, OnInit, OnDestroy } from '@angular/core';

interface FlashProduct {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  sold: number;
  left: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-flash-sales',
  templateUrl: './flash-sales.component.html',
  styleUrls: ['./flash-sales.component.css']
})
export class FlashSalesComponent implements OnInit, OnDestroy {
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private endTime: Date;

  timeLeft: TimeLeft = { days: 3, hours: 23, minutes: 19, seconds: 56 };

  flashProducts: FlashProduct[] = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80',
      price: 120, originalPrice: 160, discount: 40, rating: 4.5, reviews: 88, sold: 75, left: 25
    },
    {
      name: 'AK-900 Wired Keyboard',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
      price: 960, originalPrice: 1160, discount: 35, rating: 4, reviews: 75, sold: 40, left: 60
    },
    {
      name: 'IPS LCD Gaming Monitor',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80',
      price: 370, originalPrice: 400, discount: 30, rating: 4.5, reviews: 99, sold: 90, left: 10
    },
    {
      name: 'S-Series Comfort Chair',
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80',
      price: 375, originalPrice: 400, discount: 25, rating: 5, reviews: 99, sold: 65, left: 35
    },
    {
      name: 'GP11 Shift Sneakers',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
      price: 160, originalPrice: 190, discount: 40, rating: 4, reviews: 54, sold: 85, left: 15
    },
  ];

  constructor() {
    const end = new Date();
    end.setDate(end.getDate() + this.timeLeft.days);
    end.setHours(end.getHours() + this.timeLeft.hours);
    end.setMinutes(end.getMinutes() + this.timeLeft.minutes);
    end.setSeconds(end.getSeconds() + this.timeLeft.seconds);
    this.endTime = end;
  }

  ngOnInit() {
    this.updateTimer();
    this.timerInterval = setInterval(() => this.updateTimer(), 1000);
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  updateTimer() {
    const now = new Date().getTime();
    const remaining = this.endTime.getTime() - now;
    if (remaining <= 0) {
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return;
    }
    this.timeLeft = {
      days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((remaining % (1000 * 60)) / 1000),
    };
  }

  getStars(rating: number): string[] {
    const stars: string[] = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < full) stars.push('fas fa-star');
      else if (i === full && half) stars.push('fas fa-star-half-alt');
      else stars.push('far fa-star');
    }
    return stars;
  }
}
