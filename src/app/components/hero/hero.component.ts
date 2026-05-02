import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  parallaxOffset = 0;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.parallaxOffset = window.scrollY * 0.5;
  }
}
