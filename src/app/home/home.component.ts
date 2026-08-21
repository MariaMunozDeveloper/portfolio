import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import {VisitCounterService} from "../visit-counter.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  visits = 0;

  constructor(private visitCounter: VisitCounterService) {}

  ngOnInit() {
    this.visitCounter.getAndIncrementVisits().subscribe(count => {
      this.visits = count;
    });
  }
}