import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { faUsersLine, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent {
  faUsersLine = faUsersLine;
  faEyeSlash = faEyeSlash

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  @Output() loginClicked: EventEmitter<boolean> = new EventEmitter();
  
  constructor() {

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  btnClicked(): void {
    this.loginClicked.emit(true);
  }
}