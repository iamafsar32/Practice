import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  isDarkMode = false;

  totalProjects = 3;
  skillsCount = 4;

  currentDate = new Date().toLocaleString();

  newProject = '';

  projects: string[] = [
    'Student Attendance System',
    'Dashboard Annotation Feature',
    'JWT Authentication App'
  ];

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  addProject() {

    if (this.newProject.trim()) {

      this.projects.push(this.newProject);

      this.totalProjects = this.projects.length;

      this.newProject = '';
    }
  }
}