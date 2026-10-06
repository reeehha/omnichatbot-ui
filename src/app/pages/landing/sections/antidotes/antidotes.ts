import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antidotes',
  templateUrl: './antidotes.html',
  styleUrls: ['./antidotes.css']
})
export class Antidotes implements OnInit {
  phase = 0;

  ngOnInit() {
    // Sequence of transitions
    setTimeout(() => this.phase = 1, 500);      // Image starts moving
    setTimeout(() => this.phase = 2, 2500);     // Image becomes status box
    setTimeout(() => this.phase = 3, 4000);     // Auto reply appears
  }
}
