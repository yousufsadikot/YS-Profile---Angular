import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ys-profile';
  public isCollapsed = true;
  adjustmentValue: number = 30;
  innerWidth!: number;
  navClass = true;

  ngOnInit(): void {
    this.onResize();

    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      let textElement = document.getElementById('text');

      if (textElement) {
        textElement.style.top = value + 'px';
        // console.log('scrolling', textElement.style.top);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if (this.innerWidth < 991) {
      this.navClass = false;
    } else {
      this.navClass = true;
    }
  }
}
