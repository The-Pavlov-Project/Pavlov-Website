import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  emailForm = new FormControl('', [Validators.required, Validators.email]);
  email: string
  username: string
  password: string
  passwordConfirmation: string
  

  // to hide the passwd during the login
  pswdHide1 = true; 
  pswdHide2 = true;

  constructor(
    private authServece: AuthService
  ) { }

  ngOnInit(): void { }

  getEmailErrorMessage() {
    if (this.emailForm.hasError('required')) {
      return 'You must enter a value';
    }
    return this.emailForm.hasError('email') ? 'Not a valid email' : '';
  }

  onLogin() {
    var loginInput = {
      username: this.email,
      password: this.password
    }
    this.authServece.loginUser(loginInput).subscribe(
      response => {
        alert('User logged in');
      },
      error => {
        alert('Error:' + error);
      }
    )
  }

  onRegister() {
    var registerInput = {
      email: this.email,
      username: this.username,
      password: this.password,
      confirm_password: this.passwordConfirmation
    }
    this.authServece.registerUser(registerInput).subscribe(
      response => {
        alert('User registered');
      },
      error => {
        alert('Error: ' + error);
      }
    )
  }

}

