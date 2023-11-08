import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbDropdownModule,
  NgbScrollSpyModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
//Services
import { WorkExperienceService } from './services/work-experience.service';
//Directives
import { ParallaxDirective } from './directives/parallax.directive';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { ScreenSizeDirective } from './directives/screen-size.directive';
import { ScrollAdjustDirective } from './directives/scroll-adjust.directive';
import { CloseNavDirective } from './directives/close-nav.directive';

//components
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { FooterComponent } from './components/footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    NgbScrollSpyModule,
    NgbCollapseModule,
  ],
  providers: [WorkExperienceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
