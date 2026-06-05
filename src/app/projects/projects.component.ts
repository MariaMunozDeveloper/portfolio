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
      tag: 'Fullstack · Destacado',
      name: 'Cookee',
      desc: 'Red social para compartir recetas construida fullstack desde cero. Los usuarios pueden publicar, descubrir y guardar recetas. Incluye subida de imágenes, autenticación JWT y una API REST propia.',
      tech: ['Angular', 'Node.js', 'MongoDB Atlas', 'Cloudinary', 'JWT', 'Railway'],
      link: 'https://github.com/MariaMunozDeveloper'
    },
    {
      tag: 'Experiencia · Fintech',
      name: 'Prácticas en Fintech',
      desc: 'Desarrolladora Fullstack junior. Trabajé en un dashboard Angular con backend Kotlin/Spring Boot — entregando funcionalidades en un proyecto real de producción con arquitectura hexagonal.',
      tech: ['Angular', 'Kotlin', 'Spring Boot', 'RxJS', 'MongoDB']
    },
    {
      tag: 'Este sitio · Meta',
      name: 'Este portfolio',
      desc: 'Construido con Angular 17 standalone components, rutas con lazy loading, una directiva personalizada con IntersectionObserver y cero librerías de UI. Porque a veces la mejor forma de demostrar que sabes Angular es usarlo.',
      tech: ['Angular 17', 'Standalone Components', 'CSS3', 'Lazy Loading', 'Directivas'],
      link: 'https://github.com/MariaMunozDeveloper',
      wide: true
    }
  ];
}