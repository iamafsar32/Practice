import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isDarkMode = false;

  totalProjects = 3;
  skillsCount = 4;

  currentDate = new Date().toLocaleString();

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}