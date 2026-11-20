import { Component } from '@angular/core';

import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Home,
    About,
    Projects,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
