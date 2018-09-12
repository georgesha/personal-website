import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: '/home'}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BioComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
