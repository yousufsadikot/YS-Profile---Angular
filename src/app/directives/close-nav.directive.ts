import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCloseNav]',
})
export class CloseNavDirective {
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault();
    const navbar = document.querySelector('.navbar-collapse');

    if (navbar) {
      if (navbar.classList.contains('show')) {
        // If the menu is open, close it
        navbar.classList.remove('show');
      } else {
        // If the menu is closed, toggle it open
        navbar.classList.add('show');
      }
    }
  }
}
