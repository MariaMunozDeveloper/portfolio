import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Project {
  tag: string;
  name: string;
  desc: string;
  tech: string[];
  link?: string;
  wide?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      tag: 'Fullstack · Featured',
      name: 'Cookee',
      desc: 'Social recipe-sharing network built end-to-end. Users can post, discover, and save recipes. Includes image upload, JWT auth, and a custom REST API.',
      tech: ['Angular', 'Node.js', 'MongoDB Atlas', 'Cloudinary', 'JWT', 'Railway'],
      link: 'https://github.com/MariaMunozDeveloper'
    },
    {
      tag: 'Experience · Fintech',
      name: 'Fintech internship',
      desc: 'Junior developer at a fintech startup. Worked on an Angular dashboard with a Kotlin/Spring Boot backend — shipping features in a real production codebase with hexagonal architecture.',
      tech: ['Angular', 'Kotlin', 'Spring Boot', 'RxJS', 'MongoDB']
    },
    {
      tag: 'This site · Meta',
      name: 'This portfolio',
      desc: 'Built with Angular 17 standalone components, lazy-loaded routes, a custom reveal directive with IntersectionObserver, and zero UI libraries. Because sometimes the best way to prove you know the framework is to just use it.',
      tech: ['Angular 17', 'Standalone Components', 'CSS3', 'Lazy Loading', 'Custom Directives'],
      link: 'https://github.com/MariaMunozDeveloper',
      wide: true
    }
  ];
}