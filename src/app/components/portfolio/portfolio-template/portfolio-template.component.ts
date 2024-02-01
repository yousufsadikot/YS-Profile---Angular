import { Component, Input } from '@angular/core';

interface IPortfolio {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  badgeLabel: IBagelText[];
  link: string;
}

interface IBagelText {
  labelTitle: string;
}

@Component({
  selector: 'app-portfolio-template',
  templateUrl: './portfolio-template.component.html',
  styleUrls: ['./portfolio-template.component.css'],
})
export class PortfolioTemplateComponent {
  @Input() portfolioa: IPortfolio[] = [];
}
