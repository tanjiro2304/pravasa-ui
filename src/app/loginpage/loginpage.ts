import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { User } from '../models/User';
import { UserService } from '../service/user-service';
@Component({
  selector: 'app-loginpage',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule, ButtonModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage {

  constructor(private userService: UserService) {}

  user: User  = {
    id: 0,
    username: '',
    password: '',
    token: ''
  };

  onSubmit(){
    this.userService.login(this.user).subscribe({
      next: res =>{
        alert('Login successful! Token stored.');
      }
    });
  }
}
