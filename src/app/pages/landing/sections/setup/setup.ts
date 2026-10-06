import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.html',
  styleUrls: ['./setup.css']
})
export class Setup implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const sections = this.elRef.nativeElement.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach((sec: Element) => observer.observe(sec));
  }
}
