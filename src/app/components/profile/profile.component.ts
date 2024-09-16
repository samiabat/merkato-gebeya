import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

   // Example data, replace with actual data
   firstName = 'John';
   lastName = 'Doe';
   email = 'john.doe@gmail.com';
   address = '123 Main St, Addis Ababa, Ethiopia';
 
   saveChanges() {
     // Logic to save profile changes
     console.log('Profile updated:', this.firstName, this.lastName, this.email, this.address);
   }

}
