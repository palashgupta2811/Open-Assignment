import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { EligibilityComponent } from './components/homepage/eligibility/eligibility.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { DisplayCardComponent } from './components/open-account/display-card/display-card.component';
import { HeaderComponent } from './components/homepage/header/header.component';
import { LeftContentComponent } from './components/homepage/left-content/left-content.component';
import { SideDisplayComponent } from './components/homepage/eligibility/side-display/side-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EligibilityComponent,
    OpenAccountComponent,
    DisplayCardComponent,
    HeaderComponent,
    LeftContentComponent,
    SideDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
