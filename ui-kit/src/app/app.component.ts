import { Component } from '@angular/core'

import { HgToast } from 'projects/ui-components/src/public_api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private _index: number = 0
  constructor(
    private toast: HgToast
  ) {}

  showToast() {
    this.toast.simple('Hello World!', {
      duration: 8000,
      data: {
          title: 'Hello world',
          message: `Hello ${this._index}`
      }
    })

    this._index++
  }

}
