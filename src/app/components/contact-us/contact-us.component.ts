import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  submitted = false;

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;
    setTimeout(() => this.submitted = false, 4000);
  }
}
