import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSkillsComponent } from './technical-skills.component';

describe('TechnicalSkillsComponent', () => {
  let component: TechnicalSkillsComponent;
  let fixture: ComponentFixture<TechnicalSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalSkillsComponent]
    });
    fixture = TestBed.createComponent(TechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
