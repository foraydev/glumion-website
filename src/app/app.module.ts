import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { AboutComponent } from './components/about/about.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { DownloadComponent } from './components/download/download.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    TrailerComponent,
    AboutComponent,
    AboutSectionComponent,
    DownloadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
