import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css'],
})
export class HeroBannerComponent implements OnInit {
  title = 'Yousuf Sadikot';
  ngOnInit(): void {
    let text = document.getElementById('text');
  }
}
