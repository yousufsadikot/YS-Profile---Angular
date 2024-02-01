import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDropdownModule,
  NgbScrollSpyModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CaroselModule } from '../app/components/carousel/carosel.module';
//Services
import { WorkExperienceService } from './services/work-experience.service';
import { TechnicaSkillsService } from './services/technica-skills.service';
//Directives
import { ParallaxDirective } from './directives/parallax.directive';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { ScreenSizeDirective } from './directives/screen-size.directive';
import { ScrollAdjustDirective } from './directives/scroll-adjust.directive';
import { CloseNavDirective } from './directives/close-nav.directive';

import { SmoothScrollDirective } from './directives/scroll-to-thirty.directive';

//components
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioTemplateComponent } from './components/portfolio/portfolio-template/portfolio-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBannerComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    TechnicalSkillsComponent,
    PortfolioComponent,
    ContactsComponent,
    SocialmediaComponent,
    FooterComponent,
    ParallaxDirective,
    ScrollListenerDirective,
    ScreenSizeDirective,
    ScrollAdjustDirective,
    CloseNavDirective,
    SmoothScrollDirective,
    PortfolioTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule,
    NgbScrollSpyModule,
    NgbCollapseModule,
    NgbCarouselModule,
    CaroselModule,
  ],
  providers: [WorkExperienceService, TechnicaSkillsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
