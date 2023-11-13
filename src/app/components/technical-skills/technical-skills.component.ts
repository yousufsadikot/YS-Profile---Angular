import { Component, OnInit } from '@angular/core';
import { TechnicaSkillsService } from '../../services/technica-skills.service';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css'],
})
export class TechnicalSkillsComponent implements OnInit {
  technical: any;

  constructor(private technicalSkillsServices: TechnicaSkillsService) {}

  ngOnInit(): void {
    this.technical = this.technicalSkillsServices.getTechnicalSills();
  }
}
