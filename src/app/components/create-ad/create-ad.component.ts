import { Component } from '@angular/core';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent {

  createAd() {
    console.log('Ad created.');
    // Add logic to handle ad creation (e.g., API call)
  }

}
