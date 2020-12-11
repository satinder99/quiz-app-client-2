import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeService} from './services/home.service';
import { QuizService } from './services/quiz.service';
import { 
  SocialLoginModule, 
  AuthServiceConfig,
 
} from 'angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '538918892428-7svk4va0k9fprbmpi772a3bbb7g9a62c.apps.googleusercontent.com')
  },
  {
    id : FacebookLoginProvider.PROVIDER_ID,
    provider : new FacebookLoginProvider(
      '643526379637107'
    )
  }
]);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    HomeService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
