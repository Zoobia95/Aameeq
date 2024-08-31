import { Component, HostListener, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})
export class AnimationComponent implements OnInit {
  spline: any;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const canvas = document.getElementById('canvas3d') as any;
    this.spline = new Application(canvas);
    this.loadSpline().then(() => {
      this.spline.setZoom(1.2);
      this.animateCursor();
    });
  }

  loadSpline() {
    return this.spline.load('assets/animation/scene.spline');
  }

  animateCursor() {
    const light = document.getElementById('light');
    const roomPosition = {
      top: document.getElementById('darkness').offsetTop,
      left: document.getElementById('darkness').offsetLeft,
    };

    const topMargin = roomPosition.top + window.innerHeight * Math.random();
    const position = {
      left: Math.random() * roomPosition.left,
      top: topMargin + 150 < window.innerHeight ? topMargin : topMargin - 350,
    };

    document.addEventListener('mousemove', (e: any) => {
      var x = e.clientX - 150 || e.touches[0].clientX - 150;
      var y = e.clientY - 150 || e.touches[0].clientY - 150;

      light.style.left = x + 'px';
      light.style.top = y + 'px';
    });

    document.addEventListener('touchmove', (e: any) => {
      var x = e.clientX - 150 || e.touches[0].clientX - 150;
      var y = e.clientY - 150 || e.touches[0].clientY - 150;

      light.style.left = x + 'px';
      light.style.top = y + 'px';
    });
  }
}
