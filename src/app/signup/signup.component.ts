import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  hide = false;
  constructor(private router: Router, private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirm_password: new FormControl(null, Validators.required)
    });
  }

  // Material Function
  getErrorMessage(value: string): string {
    if (this.signUpForm.get(value).hasError('required')) {
      return 'You must enter a value';
    }
    return this.signUpForm.get(value).hasError('email') ? 'Not a valid email' : '';
  }

  onSignUp(): void {
    const name = this.signUpForm.value.name;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    // TODO: Hit the post api for registeration
    // this.http.post('http://breeur.in/food/register.php', {
    //   email,
    //   name,
    //   password
    // }).subscribe((resData) => {
    //   this.auth.email = resData.email;
    //   console.log(resData);
    // });
    // this.router.navigate(['/']);
  }

}
