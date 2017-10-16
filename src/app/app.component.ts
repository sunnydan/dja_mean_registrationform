import { Component } from '@angular/core';
import { User } from './app.user';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = new User();
  on = false;

  onSubmit() {
    this.on = true;
  }
}
