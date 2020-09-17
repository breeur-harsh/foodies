import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Reactive form for login
  loginForm: FormGroup;

  // Toggle eye button for password
  hide = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  // Material Function
  getErrorMessage(): string {
    if (this.loginForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }
  onLogin(): void {
    this.router.navigate(['dashboard']);
  }
}

