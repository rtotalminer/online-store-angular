import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


  constructor(
    private userService: UserService
  ) {}

  onSubmit(email: string, password: string) {
    this.userService.signUp(email, password)
  }
}
