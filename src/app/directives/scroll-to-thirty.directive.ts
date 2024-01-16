import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]',
})
export class SmoothScrollDirective {
  @Input() targetId: string = '';
  @Input() offset: number = 30;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();

    const targetElement = document.getElementById(this.targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - this.offset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }
}
