import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {
  workExperience: any;
  constructor() {}

  getworkExperince() {
    return (this.workExperience = [
      {
        id: 1,
        title: 'Senior Front End Developer',
        startDate: 'March 2017',
        endDate: 'October 2023',
        company: 'RBC Wealth Management',
        location: 'Toronto, Ontario',
        logo: 'assets/img/rbc.jpg',
        alt: 'RBC',
        href: 'https://www.rbcwealthmanagement.com/en-ca/about/',
        jobBrief:
          'Worked collaboratively within an Agile application team to design, develop, test, and maintain software for RBC Wealth Management Services, emphasizing impactful solutions that meet business objectives and enhance user experiences.',
        jobDiscription: [
          {
            id: 1,
            jobId: 1,
            dayToday:
              'Used Angular 12, 13 and 14, along with modern web development frameworks, to craft efficient, well-structured, and testable code following industry-best practices.',
          },
          {
            id: 2,
            jobId: 1,
            dayToday:
              'Instrumental in creating intuitive and reusable user interfaces using Angular UI libraries like NG Bootstrap, Angular Material, Kendo UI and other leading Angular UI libraries including CSS preprocessors (Sass and LESS). Adhered to Design Guide Standards and pixel-perfect designs.',
          },
          {
            id: 3,
            jobId: 1,
            dayToday:
              'Prioritize the implementation of accessibility to meet stringent compliance with the Accessibility for Ontarians with Disabilities Act (AODA) and Web Content Accessibility Guidelines (WCAG). This ensures that interfaces are user-friendly and inclusive for everyone.',
          },
          {
            id: 4,
            jobId: 1,
            dayToday:
              'Gathered functional requirements and translated them into detailed technical specifications, working closely with product owners, project managers, designers, and fellow developers.',
          },
          {
            id: 5,
            jobId: 1,
            dayToday:
              'Utilized NgRx state management, seamlessly integrating RESTful APIs with Angular, supporting efficient data flow in both NoSQL and SQL (RDBMS) databases.',
          },
          {
            id: 6,
            jobId: 1,
            dayToday:
              'Wrote comprehensive Angular unit tests to maximize code coverage, covering both functional and UI aspects.',
          },
          {
            id: 7,
            jobId: 1,
            dayToday:
              'Conducted code reviews through Git pull requests to collaborate on code changes, provide feedback, and ensure that the codebase is of high quality.',
          },
          {
            id: 8,
            jobId: 1,
            dayToday:
              'Played an integral role in the creation and optimization of configuration, build, and test scripts using tools such as GitHub and Jenkins tailored for Continuous Integration/Continuous Deployment (CI/CD) environments, enhancing overall efficiency, and testing within the development process.',
          },
          {
            id: 9,
            jobId: 1,
            dayToday:
              'Actively participated in the deployment pipeline process, optimizing web application delivery for efficiency, reliability, and high quality within a cloud-native architecture to streamline deployment, ensuring scalability, resilience, and alignment with DevOps principles.',
          },
        ],
      },
      {
        id: 2,
        title: 'Web Deployer',
        startDate: 'September 2016',
        endDate: 'March 2017',
        company: 'TD Bank',
        location: 'Toronto, Ontario',
        logo: 'assets/img/td.jpg',
        alt: 'TD Bank',
        href: 'https://www.td.com/ca/en/about-td',
        jobBrief:
          'Responsible for the implementation and oversight of Adobe/Omniture analytics products to establish and track performance measures, ensuring effective utilization and continuous improvement of digital solutions.',
        jobDiscription: [
          {
            id: 1,
            jobId: 2,
            dayToday:
              'Collaboratively identified key user indicators and pain points, enabling creation of tagging scripts for enhanced data collection and analytics into strategic-minded dashboards and program-based reports.',
          },
          {
            id: 2,
            jobId: 2,
            dayToday:
              'Developed implementation documentation, use case development, training documents, and analytics quality assurance maintaining a focal point relationship with Adobe Analytics implementation activities.',
          },
          {
            id: 3,
            jobId: 2,
            dayToday:
              'Ensured timely delivery and accuracy of documentation and technical coding via Tag Management System.',
          },
          {
            id: 4,
            jobId: 2,
            dayToday:
              'Provided training, and validation support to quality assurance testing teams bringing focus to tagging of the application elements for usage tracking and reporting.',
          },
          {
            id: 5,
            jobId: 2,
            dayToday:
              'Fostered strong stakeholder relationships to identify opportunities to leverage existing technology or methodology for quick wins.',
          },
        ],
      },
      {
        id: 3,
        title: 'Front-end developer',
        startDate: 'March 2015',
        endDate: 'September 2016',
        company: 'Scotiabank',
        location: 'Toronto, Ontario',
        logo: 'assets/img/scotia.jpg',
        alt: 'Scotiabank',
        href: 'https://www.scotiabank.com/ca/en/about.html',
        jobBrief:
          'Accountable to develop and deploy high performance, data driven responsive user experiences for online products by leveraging JavaScript library like React.js for web and mobile platforms.',
        jobDiscription: [
          {
            id: 1,
            jobId: 3,
            dayToday:
              'Build new table-less W3C validated XHTML/XML and Implements overall enhancements based on project requirements and strategic priorities for the Secured Scotia online banking.',
          },
          {
            id: 2,
            jobId: 3,
            dayToday:
              'Hand-code, analyze, debug, and deliver clean, validated, maintainable code following current bank accessibility guidelines and compliant to WCAG. Ensure cross-browser/cross-platform compatibility. ',
          },
          {
            id: 3,
            jobId: 3,
            dayToday:
              'Developed and improved existing code and design, addressed existing defects and markup issues, provided innovative solutions, and contributed to future design and strategic direction.',
          },
        ],
      },
      {
        id: 4,
        title: 'Product Manager',
        startDate: 'March 2015',
        endDate: 'September 2016',
        company: 'Product Manager',
        location: 'Toronto, Ontario',
        logo: 'assets/img/neulion.jpg',
        alt: 'Neulion',
        href: 'https://www.endeavorstreaming.com/',
        jobBrief:
          'Responsible for overseeing content production for live sports events and entertainment broadcasts on Over-the-top (OTT) platforms worldwide.',
        jobDiscription: [
          {
            id: 1,
            jobId: 4,
            dayToday:
              'Designed responsive web and user interfaces across platforms to move seamlessly between different areas of development, design, and production.',
          },
          {
            id: 2,
            jobId: 4,
            dayToday:
              'Optimized the VOD content ingestion process, input tagging and rich metadata including bulk updates using XML, upload, and publish content through Content Management System.',
          },
          {
            id: 3,
            jobId: 4,
            dayToday:
              'Managed the lifecycle of web projects from creating landing pages and micro sites to implementing updates and site administration through Content Management Systems.',
          },
          {
            id: 4,
            jobId: 4,
            dayToday:
              'Designed and managed ad units, banner ad campaigns, responsive e-mail marketing campaigns, newsletter, and other online and offline marketing initiatives.',
          },
        ],
      },
      {
        id: 5,
        title: 'Marketing and Product Designer',
        startDate: 'July 2005',
        endDate: 'February 2007',
        company: 'Viscor (Vissionnering)',
        location: 'Toronto, Ontario',
        logo: 'assets/img/viscor.jpg',
        alt: 'Viscor',
        href: 'https://www.viscor.com/en/viscor/home',
        jobBrief:
          'Collaborated with media partners and marketing teams to plan campaigns based on project parameters. Designed visual content for Visioneering, meeting corporate standards. Managed corporate website, creating online and print product catalogues. Developed marketing collateral for national/international events, promotions, and product launches.',
        jobDiscription: [
          {
            id: 1,
            jobId: 5,
            dayToday:
              'Designed responsive web and user interfaces across platforms to move seamlessly between different areas of development, design, and production.',
          },
          {
            id: 2,
            jobId: 5,
            dayToday:
              'Optimized the VOD content ingestion process, input tagging and rich metadata including bulk updates using XML, upload, and publish content through Content Management System.',
          },
          {
            id: 3,
            jobId: 5,
            dayToday:
              'Managed the lifecycle of web projects from creating landing pages and micro sites to implementing updates and site administration through Content Management Systems.',
          },
          {
            id: 4,
            jobId: 5,
            dayToday:
              'Designed and managed ad units, banner ad campaigns, responsive e-mail marketing campaigns, newsletter, and other online and offline marketing initiatives.',
          },
        ],
      },
    ]);
  }
}
