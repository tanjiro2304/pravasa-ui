import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-loginpage',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule, ButtonModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css',
})
export class Loginpage {
  text1: string | undefined;

    text2: string | undefined;
}
