
// Register Component for Sign Up
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { full_name, email, phone_number, password } = this.registerForm.value;
      this.http.post<any>('https://ephara-backend.onrender.com/api/user/register', {
        full_name,
        email,
        phone_number,
        password
      }).subscribe(
        (response) => {
          this.successMessage = 'User registered successfully';
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/sign-in']);
          }, 2000);
        },
        (error) => {
          if (error.error.detail) {
            this.errorMessage = error.error.detail;
          } else {
            this.errorMessage = 'Registration failed. Please try again.';
          }
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
      this.successMessage = '';
    }
  }
}