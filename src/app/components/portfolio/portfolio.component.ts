import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  Portfolio = [
    {
      imageSrc: '../assets/images/portfolio/rbc-port.jpg',
      imageAlt: 'RBC',
      title: 'RBC WealthTracker',
      description:
        'Led Agile team at RBC Wealth Management Services, driving UI design, front-end development, testing, and maintenance of impactful enterprise web applications.',
      badgeLabel: [
        {
          labelTitle: 'UX/UI Design',
        },
        {
          labelTitle: 'Front-End Devlopment',
        },
        {
          labelTitle: 'Angular',
        },
        {
          labelTitle: 'API Development ',
        },
      ],
      link: '',
    },

    {
      imageSrc: '../assets/images/portfolio/td-port.png',
      imageAlt: 'TD Bank',
      title: 'TD Measurement Solutions',
      description:
        "Implemented and managed Adobe/Omniture analytics for TD's online platforms, developing tagging strategies to extract valuable insights for Key Performance Indicators.",
      badgeLabel: [
        {
          labelTitle: 'Front-End',
        },
        {
          labelTitle: 'SaaS',
        },
        {
          labelTitle: 'Tag Manager',
        },
      ],
      link: '',
    },
    {
      imageSrc: '../assets/images/portfolio/scotia-port.jpg',
      imageAlt: 'Scotiabank Online Banking',
      title: 'Scotiabank',
      description:
        'Led front-end development for Scotiabank online banking, crafting responsive user experiences with React for web and mobile platforms. Contributed to feature enhancements.',
      badgeLabel: [
        {
          labelTitle: 'UI Design',
        },
        {
          labelTitle: 'Front-End Devlopment',
        },
        {
          labelTitle: 'React',
        },
      ],
      link: '',
    },
    {
      imageSrc: '../assets/images/portfolio/neulion-port.png',
      imageAlt: 'Neulion',
      title: 'Neulion',
      description:
        'Oversaw content production for live sports and entertainment broadcasts on global OTT platforms. Designed responsive web and user interfaces seamlessly.',
      badgeLabel: [
        {
          labelTitle: 'UX/UI Design',
        },
        {
          labelTitle: 'Front-End Devlopment',
        },
        {
          labelTitle: 'Branding',
        },
        {
          labelTitle: 'Video Editing',
        },
      ],
      link: '',
    },
  ];
}
