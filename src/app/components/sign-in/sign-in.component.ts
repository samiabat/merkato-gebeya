import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email_or_phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email_or_phone, password } = this.loginForm.value;
      this.http.post<any>('http://127.0.0.1:8000/token', {
        email_or_phone,
        password
      }).subscribe(
        (response) => {
          const accessToken = response.access_token;
          if (accessToken) {
            localStorage.setItem('access_token', accessToken);
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          this.errorMessage = `${error} Invalid credentials. Please try again.`;
        }
      );
    } else {
      this.errorMessage = 'Please fill in all fields.';
    }
  }
}