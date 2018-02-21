import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TextAnimationComponent } from './text-animation/text-animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoComponent } from './photo/photo.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent,
    HeaderComponent,
    HomeComponent,
    TextAnimationComponent,
    PhotoComponent,
    FooterComponent,
    ContactComponent,
    HistoryComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent, 
      },
      
      {
        path: 'about',
        component: AboutComponent,
        data: { state: 'about' }
      },
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
