import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WorkComponent } from './components/work/work.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ClientsFeedbackComponent } from './components/clients-feedback/clients-feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { TwSectionComponent } from './components/tw-section/tw-section.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WelcomeComponent,
    OurServicesComponent,
    WorkComponent,
    WhyChooseUsComponent,
    QuestionsComponent,
    ClientsFeedbackComponent,
    FooterComponent,
    TwSectionComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularTypewriterEffectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
