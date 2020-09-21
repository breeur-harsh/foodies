import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Reactive form for login
  adminLogin: FormGroup;

  // Toggle eye button for password Material variable
  hide = true;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.adminLogin = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  // Material Function
  getErrorMessage(): string {
    if (this.adminLogin.get('username').hasError('required')) {
      return 'You must enter a value';
    }
    return this.adminLogin.get('username').hasError('username') ? 'Not a valid username' : '';
  }
  // --------------------------------
  onAdminLogin(): void {
    const username = this.adminLogin.value.username;
    const password = this.adminLogin.value.password;
    // TODO: login endpoint with JWT.
    this.http.post('http://breeur.in/food/superadmin_login.php', {
      username,
      password
    }).subscribe(resData => {
      console.log(resData);
    });
    console.log(this.adminLogin.value.username, this.adminLogin.value.password);
    // this.router.navigate(['dashboard']);
  }

}
