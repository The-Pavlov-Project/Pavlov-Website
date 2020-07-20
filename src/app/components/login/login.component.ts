import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  showLoginErrorMessage = false;

  showRegisterSuccessMessage = false;
  showRegisterErrorMessage = false;

  // to hide the passwd during the login
  pswdHide1 = true;
  pswdHide2 = true;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private authServece: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required, Validators.minLength(4), , Validators.pattern('[a-zA-Z0-9-_]*')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onLogin(userData) {
    this.authServece.loginUser(
        userData.email,
        userData.password
      ).subscribe(
      response => {
        this.router.navigate(['/me'])
      },
      error => {
        console.log(error);
        this.showLoginErrorMessage = true;
      }
    )
  }

  onRegister(userData) {
    this.authServece.registerUser(
        userData.email,
        userData.username,
        userData.password,
        userData.passwordConfirmation
      ).subscribe(
      response => {
        this.showRegisterSuccessMessage = true;
        this.showRegisterErrorMessage = false;
        window.location.reload();
      },
      error => {
        console.log(error)
        this.showRegisterErrorMessage = true;
        this.showRegisterSuccessMessage = false;
      }
    )
  }

}

