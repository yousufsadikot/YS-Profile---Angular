import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollListener]',
})
export class ScrollListenerDirective {
  private isLight: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollY = window.scrollY;
    const screenWidth = window.innerWidth;
    const navbar = this.el.nativeElement;
    const logoImage = navbar.querySelector('.navbar-brand img');

    if (scrollY > 100 && screenWidth >= 750 && !this.isLight) {
      // Change 100 to the desired scroll position
      this.renderer.removeClass(this.el.nativeElement, 'navbar-dark');
      this.renderer.addClass(this.el.nativeElement, 'navbar-light');
      logoImage.src = 'assets/img/loop-logo.png'; // Update with the path to your lighter logo image
      this.isLight = true;
    } else if ((scrollY <= 100 || screenWidth < 750) && this.isLight) {
      this.renderer.removeClass(this.el.nativeElement, 'navbar-light');
      this.renderer.addClass(this.el.nativeElement, 'navbar-dark');
      logoImage.src = 'assets/img/loop-logo-white.png'; // Update with the path to your lighter logo image
      this.isLight = false;
    }
  }
}
