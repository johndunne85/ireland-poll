import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AppComponent }         from './app.component';
import { MaynoothComponent } from './maynooth/maynooth.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TrinityComponent } from './trinity/trinity.component';
import { DublinComponent } from './dublin/dublin.component';
import { DonegalComponent } from './donegal/donegal.component';
import { LimerickComponent } from './limerick/limerick.component';
import { SignupComponent } from './signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SplashComponent } from './splash/splash.component';
import { MoreQuestionsComponent } from './more-questions/more-questions.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: SplashComponent},
      { path: 'trinity', component: TrinityComponent },
      { path: 'dublin', component: DublinComponent },
      { path: 'donegal', component: DonegalComponent },
      { path: 'limerick', component: LimerickComponent },
      { path: 'maynooth', component: MaynoothComponent},
      { path: 'signup', component: SignupComponent}
    ])
  ],
  declarations: [
    AppComponent,
    MaynoothComponent,
    BarChartComponent,
    TrinityComponent,
    DublinComponent,
    DonegalComponent,
    LimerickComponent,
    QuestionsComponent,
    SignupComponent,
    SplashComponent,
    MoreQuestionsComponent

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
