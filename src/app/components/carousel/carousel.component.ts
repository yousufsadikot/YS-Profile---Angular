import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

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

  get backgroundImage() {
    return `url(${this.images[this.selectedIndex].imageSrc})`;
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.autoSlide) {
      //this.autoSlideImages();
    }
  }
  // @HostListener('click', ['$event'])
  // onClick(event: Event) {
  //   event.preventDefault();

  //   // Check if 'href' attribute exists
  //   const hrefAttribute = this.el.nativeElement.getAttribute('href');
  //   if (!hrefAttribute) {
  //     console.error("Missing 'href' attribute on the element.");
  //     return;
  //   }

  //   const targetId = hrefAttribute.substring(1);
  //   const targetElement = document.getElementById(targetId);

  //   if (targetElement) {
  //     const targetOffset = targetElement.offsetTop - this.adjustAmount;
  //     window.scrollTo({ top: targetOffset, behavior: 'smooth' });
  //   }
  // }

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
