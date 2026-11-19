import { Component } from '@angular/core';
import { Header } from './header/header';
import { NavBar } from './nav-bar/nav-bar';
import { Home } from './home/home';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, NavBar, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}