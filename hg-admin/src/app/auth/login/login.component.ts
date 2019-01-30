import { Component, OnInit } from '@angular/core'

import { Router } from '@angular/router'

import { AuthService, Credentials } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: Credentials

  error: string

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { 
    this.credentials = {
      username: '',
      password: ''
    }
    this.error = ''

    this._authService.loggedInState()
      .subscribe((res) => {
        if (res.loggedIn) {
          this._router.navigate(['/main'])
        } else {
          this.error = res.message
        }
      })

  }

  ngOnInit() {
  }

  login() {
    this._authService.login(
      this.credentials
    )
  }
}
