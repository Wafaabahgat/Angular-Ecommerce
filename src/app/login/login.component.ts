import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private AuthService: AuthService, private Router: Router) {}

  isLoading: boolean = false;
  ApiError: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
    ]),
  });

  handleLogin(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.isLoading = true;
      this.AuthService.login(loginForm.value).subscribe({
        next: (response) => {
          if (response === 'success') {
            this.isLoading = false;
            this.Router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.ApiError = err.msg;
        },
      });
    }
  }
}
