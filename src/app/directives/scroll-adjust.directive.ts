import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollAdjust]',
})
export class ScrollAdjustDirective {
  private adjustAmount: number = 30;

  @Input() set appScrollAdjust(adjustAmount: number) {
    this.adjustAmount = adjustAmount;
  }

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const targetId = this.el.nativeElement.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetOffset = targetElement.offsetTop - this.adjustAmount;
      window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    }
  }
}
