import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public isCollapsed = true;
  adjustmentValue: number = 30;
  innerWidth!: number;
  navClass = true;

  images = [
    {
      imageSrc: './assets/images/sliders/slider1.jpg',
      imageAlt: 'Yousuf Sadikot',
      title: 'handcrafted',
      caption:
        'With over a decade of professional software development expertise, I specialize in crafting unparalleled user experiences across diverse platforms.',
      buttonLabel: 'About me',
      buttonLabelTwo: 'Work',
      link: '#about-me',
      likTwo: '#work-experience',
    },
    {
      imageSrc: './assets/images/sliders/slider2.jpg',
      imageAlt: 'Life Cycle',
      title: 'Lifecycle',
      caption: 'Experience in the lifecycle process spanning many years',
      buttonLabel: 'Work',
      link: '#work-experience',
    },
    {
      imageSrc: './assets/images/sliders/slider3.jpg',
      imageAlt: 'UX',
      title: 'Design',
      caption:
        'Bring a unique blend of creative vision and technical proficiency to deliver exceptional user experiences',
      buttonLabel: 'Skills',
      link: '#skills',
    },
  ];

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
