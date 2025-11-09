import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './component/menubar/menubar';
import { PrimeNG } from 'primeng/config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('pravasa-ui');

  constructor(private primeng: PrimeNG){}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
