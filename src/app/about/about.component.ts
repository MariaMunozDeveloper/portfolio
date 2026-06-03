import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface StackItem {
  name: string;
  type: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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