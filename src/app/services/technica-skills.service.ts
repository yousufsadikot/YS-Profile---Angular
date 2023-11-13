import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechnicaSkillsService {
  technicalSills: any;
  constructor() {}

  getTechnicalSills() {
    return (this.technicalSills = [
      {
        id: 1,
        iconGra: 'icon-lab',
        stackTitle: 'Design Formula',
        stackDescription:
          'Designing and prototyping high-performance, data-driven, interactive, and intuitive responsive user experiences, leveraging a diverse spectrum of design tools.',
        stackOne: 'UI/UX Design',
        stackOneList: [
          {
            id: 1,
            fk_stack_id: 1,
            progrom_logo: '',
            program: 'Sketch',
          },
          {
            id: 2,
            fk_stack_id: 1,
            progrom_logo: '',
            program: 'Figma',
          },
          {
            id: 3,
            fk_stack_id: 1,
            progrom_logo: '',
            program: 'Adobe XD',
          },
          {
            id: 4,
            fk_stack_id: 1,
            progrom_logo: '',
            program: 'InVision Studio',
          },
        ],
        stackTwo: 'Graphic and icon design',
        stackTwoList: [
          {
            id: 1,
            fk_stack_id: 1,
            progrom_logo: '',
            program: 'Adobe Photoshop',
          },
          {
            id: 2,
            fk_stack_id: 1,
            progrom_logo: '',
            program: 'Adobe Illustrator',
          },
        ],
        stackThree: '',
        stackThreeList: [],
        stackFour: '',
        stackFourList: [],
        stackFive: '',
        stackFiveList: [],
        stackSix: '',
        stackSixList: [],
        stackSeven: '',
        stackSevenList: [],
        stackEight: '',
        stackEightList: [],
        stackNine: '',
        stackNineList: [],
        stackTen: '',
        stackTenList: [],
      },
      {
        id: 2,
        iconGra: 'icon-pen',
        stackTitle: 'Carefully Handcrafted',
        stackDescription:
          'Skilled in utilizing a range of technologies, frameworks, libraries, and tools within the front-end development stack to craft the user interface and enhance the user experience.\n',
        stackOne: 'DOM',
        stackOneList: [
          {
            id: '1',
            fk_stack_id: '2',
            progrom_logo: '',
            program: 'HTML',
          },
          {
            id: '2',
            fk_stack_id: '2',
            progrom_logo: '',
            program: 'CSS',
          },
          {
            id: '3',
            fk_stack_id: '2',
            progrom_logo: '',
            program: 'JavaScript',
          },
          {
            id: '4',
            fk_stack_id: '2',
            progrom_logo: '',
            program: 'jQuery',
          },
        ],
        stackTwo: 'Front-end Frameworks (MVC)',
        stackTwoList: [
          {
            id: 1,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'ReactJS',
          },
          {
            id: 2,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Angular',
          },
        ],
        stackThree: 'Responsive Design Tools',
        stackThreeList: [
          {
            id: 1,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Media Queries',
          },
          {
            id: 2,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Flexbox and Grid',
          },
        ],
        stackFour: 'CSS Preprocessors',
        stackFourList: [
          {
            id: 1,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Sass',
          },
          {
            id: 2,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'LESS',
          },
        ],
        stackFive: 'CSS Frameworks',
        stackFiveList: [
          {
            id: 1,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Bootstrap',
          },
          {
            id: 2,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Foundation',
          },
          {
            id: 3,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Material UI Components',
          },
        ],
        stackSix: 'npm (Node Package Manager) Build Tools',
        stackSixList: [
          {
            id: 1,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Webpack',
          },
          {
            id: 2,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Babel',
          },
          {
            id: 3,
            fk_stack_id: 2,
            progrom_logo: '',
            program: 'Gulp',
          },
        ],
        stackSeven: 'Version Control',
        stackSevenList: [],
        stackEight: '',
        stackEightList: [],
        stackNine: 'Linters and Formatters',
        stackNineList: [],
        stackTen: 'Browser DevTools',
        stackTenList: [],
      },
      {
        id: 3,
        iconGra: 'icon-checkmark2',
        stackTitle: 'Server-Side Magic',
        stackDescription:
          'A solid understanding of RESTful APIs for smooth front-end communication, promoting effective collaboration.\n',
        stackOne: 'Programming Languages',
        stackOneList: [
          {
            id: 1,
            fk_stack_id: 3,
            progrom_logo: '',
            program: 'C# (.NET)',
          },
          {
            id: 2,
            fk_stack_id: 3,
            progrom_logo: '',
            program: 'Node.js',
          },
        ],
        stackTwo: 'Frameworks and Libraries',
        stackTwoList: [
          {
            id: 1,
            fk_stack_id: 3,
            progrom_logo: '',
            program: 'ASP.NET',
          },
          {
            id: 2,
            fk_stack_id: 3,
            progrom_logo: '',
            program: 'Express.js',
          },
        ],
        stackThree: 'Relational Databases',
        stackThreeList: [
          {
            id: 1,
            fk_stack_id: 3,
            progrom_logo: '',
            program: 'MySQL',
          },
          {
            id: 2,
            fk_stack_id: 3,
            progrom_logo: '',
            program: 'Microsoft SQL Server',
          },
        ],
        stackFour: '',
        stackFourList: [],
        stackFive: '',
        stackFiveList: [],
        stackSix: '',
        stackSixList: [],
        stackSeven: '',
        stackSevenList: [],
        stackEight: '',
        stackEightList: [],
        stackNine: '',
        stackNineList: [],
        stackTen: '',
        stackTenList: [],
      },
    ]);
  }
}
