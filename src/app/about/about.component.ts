import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RevealDirective } from '../shared/reveal.directive';

interface StackItem {
  name: string;
  type: string;
}

interface Course {
  name: string;
  date: string;
  skill: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showCourses = false;
  showLetter = false;

  letterUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.letterUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://drive.google.com/file/d/1EpcpN0OJ8TBcNRpTzQH4VbSFMow1L3N8/preview'
    );
  }

  courses: Course[] = [
    { name: 'Ultimate GIT: gestiona tus equipos y trabaja en equipo', date: 'Jun. 2026', skill: 'Git' },
    { name: 'Angular: De cero a experto', date: 'Jun. 2026', skill: 'Angular' },
    { name: 'Aprende MongoDB desde cero', date: 'Mar. 2026', skill: 'MongoDB' },
    { name: 'Spring Framework & Spring Boot', date: 'Mar. 2026', skill: 'Spring Boot' },
  ];

  stack: StackItem[] = [
    { name: 'Angular', type: 'Frontend' },
    { name: 'TypeScript', type: 'Language' },
    { name: 'Node.js + Express', type: 'Backend' },
    { name: 'MongoDB', type: 'Database' },
    { name: 'Spring Boot', type: 'Backend' },
    { name: 'Kotlin', type: 'Language' },
    { name: 'HTML + CSS', type: 'Frontend' },
    { name: 'Git', type: 'Tooling' },
  ];
}