import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

export interface Credentials {
  username: string
  password: string
}

export interface LoginState {
  loggedIn: boolean
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _TOKEN: string = 'access_token'

  private _loggedInState: BehaviorSubject<LoginState>

  constructor() { 
    this._loggedInState = new BehaviorSubject({
      loggedIn: false,
      message: ''
    })

    if (localStorage.getItem(this._TOKEN)) {
      this._loggedInState.next({
        loggedIn: true,
        message: ''
      })
    }
  }

  login(credentials: Credentials) {
    this._loggedInState.next({
      loggedIn: false,
      message: ''
    })

    // Mock login
    if (
      credentials.username === 'admin' &&
      credentials.password === 'password'
    ) {
      localStorage.setItem(this._TOKEN, 'MOCK-ACCESS-TOKEN')

      this._loggedInState.next({
        loggedIn: true,
        message: ''
      })
    } else {
      localStorage.removeItem(this._TOKEN)
      this._loggedInState.next({
        loggedIn: false,
        message: 'Username and/or password incorrect'
      })
    }

  }

  loggedInState(): Observable<LoginState> {
    return this._loggedInState.asObservable()
  }

  logout() {
    localStorage.removeItem(this._TOKEN)
    this._loggedInState.next({
      loggedIn: false,
      message: ''
    })
  }
}
