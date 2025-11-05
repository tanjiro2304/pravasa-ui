import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
@Component({
  selector: 'app-menubar',
  imports: [Menubar],
  templateUrl: './menubar.html',
  styleUrl: './menubar.css',
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },{
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in',
        routerLink: ['/login']
      }
    ]
  }

}
