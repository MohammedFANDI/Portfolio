import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage: string = '';

  loginForm: FormGroup;

  authService= inject(AuthService);

  router= inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', //[Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8}$')]
      )
    })
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    this.errorMessage= ''; //j'ai fait l'initialisation de erroMesage dans le cas si j'ai  fait submit si les infos correcte le message d'erreur doit s'eliminer
    const {username, password} = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: (res) => {
        console.log(res, 'login');
        this.router.navigate(['/blog'])
      },
      error: err => {
        this.errorMessage = 'Username or password is wrong';
        this.loginForm.reset();
      }
    });
  }

}
