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

interface Testimonial {
  name: string;
  role: string;
  text: string;
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
    { name: 'Spring Data JPA y Hibernate: Persistencia de Datos con Java', date: 'jul. 2026', skill: 'Java, Spring Boot'},
    { name: 'Microservicios y APIs REST con Spring Boot, OAuth2 y Docker', date: 'jun. 2026', skill: 'Spring Boot, OAuth'},
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
    { name: 'Hibernate / JPA', type: 'Backend' },
    { name: 'Docker', type: 'Tooling' },
    { name: 'OAuth2', type: 'Backend' },
    { name: 'HTML + CSS', type: 'Frontend' },
    { name: 'Git', type: 'Tooling' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Miguel Ángel Guillamón Carrasco',
      role: 'Ingeniero de software en Epigram Technologies',
      text: 'María se incorporó a un proyecto con ocho años de desarrollo a sus espaldas, con una base de código "legacy" importante y una gran complejidad, tanto técnica como funcional. Desde el primer momento destacó por el entusiasmo con el que afrontó ese reto y por la rapidez con la que fue capaz de entender el proyecto y empezar a aportar valor. Tiene una gran capacidad de aprendizaje, se adapta con facilidad a nuevos entornos y trabaja con mucha autonomía y atención al detalle. Si tuviera que destacar una cualidad por encima del resto, sería su interés por comprender el proyecto en su conjunto y entender el valor de negocio detrás de cada desarrollo. No se limita a completar las tareas asignadas, sino que siempre busca entender el "por qué" de las decisiones, una actitud que no es habitual encontrar en perfiles junior y que, en mi experiencia, marca una gran diferencia en su evolución profesional.'
    }
  ];
}