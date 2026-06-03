import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {FooterComponent} from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cx = 0; cy = 0;
  rx = 0; ry = 0;
  ringSize = 32;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cx = e.clientX;
    this.cy = e.clientY;
  }

  ngOnInit() {
    const animate = () => {
      this.rx += (this.cx - this.rx) * 0.12;
      this.ry += (this.cy - this.ry) * 0.12;
      requestAnimationFrame(animate);
    };
    animate();
  }
}