import { Component, Input, OnInit } from '@angular/core';

interface CarcelImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() images: CarcelImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInteral = 3000; // Default to seconds

  private isPaused: boolean = false;
  pauseButton = false;

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      if (!this.isPaused) {
        this.onNextClick();
      }
    }, this.slideInteral);
  }

  selectImg(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  toggleSlidePause(): void {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.pauseButton = true;
    } else {
      this.pauseButton = false;
    }
  }
}
