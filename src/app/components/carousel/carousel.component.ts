import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  HostBinding,
  Renderer2,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface CarcelImages {
  imageSrc: string;
  imageAlt: string;
  title: string;
  caption: string;
  buttonLabel: string;
  link: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  private adjustAmount: number = 30;

  @Input() images: CarcelImages[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInteral = 10000; // Default to seconds

  private isPaused: boolean = false;
  pauseButton = false;

  selectedIndex = 0;
  textOption = false;

  // get backgroundImage() {
  //   return `url(${this.images[this.selectedIndex].imageSrc})`;
  // }

  @HostBinding('style.backgroundImage') backgroundImage: string;

  constructor(
    private el: ElementRef,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (this.autoSlide) {
      //this.autoSlideImages();
    }

    this.breakpointObserver
      .observe([
        Breakpoints.Handset,
        Breakpoints.Tablet,
        Breakpoints.Web,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
        Breakpoints.WebPortrait,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (
            result.breakpoints[Breakpoints.Handset] ||
            result.breakpoints[Breakpoints.HandsetPortrait]
          ) {
            this.selectedIndex === 0
              ? this.setBackgroundImage(
                  'url("./assets/images/sliders/slider-sm-1.jpg")'
                )
              : '';
            this.textOption = false;
          } else if (
            result.breakpoints[Breakpoints.Tablet] ||
            result.breakpoints[Breakpoints.TabletPortrait]
          ) {
            this.setBackgroundImage('url("/assets/tablet-background.jpg")');
            this.textOption = true;
          } else {
            this.selectedIndex === 0
              ? this.setBackgroundImage(
                  'url("./assets/images/sliders/slider1.jpg")'
                )
              : '';
            this.textOption = true;
          }
        }
      });
  }

  setBackgroundImage(imageUrl: string) {
    this.backgroundImage = imageUrl;
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
