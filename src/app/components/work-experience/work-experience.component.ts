import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExperience: any = [];
  constructor(private workExperinceService: WorkExperienceService) {}

  ngOnInit(): void {
    this.workExperience = this.workExperinceService.getworkExperince();
  }
}
