import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  onSubmit() {
    // Handle form submission logic here, like sending the data to an API.
    console.log('Form submitted');
  }

}
