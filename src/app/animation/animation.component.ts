import { Component, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})
export class AnimationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const canvas = document.getElementById('canvas3d') as any;
    const spline = new Application(canvas);
    spline.load('assets/animation/scene.spline').then(() => {
      spline.emitEvent('mouseHover', 'Cube');
    });
  }

}
