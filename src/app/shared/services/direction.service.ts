import { Injectable } from '@angular/core';
import screenfull from 'screenfull';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  isRtl = false; // Initially set to LTR
  isLtr = true;

  toggleDirection() {
    this.isRtl = true;
  }
  toggleDirectionLtr() {
    this.isLtr = true;
    this.isRtl = false;
  }


  private isFullscreen = false;

  constructor() {}

  toggleFullscreen(): void {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }

  get isFullscreenEnabled(): boolean {
    return screenfull.isEnabled;
  }

  get isFullscreenActive(): boolean {
    return this.isFullscreen;
  }
}
