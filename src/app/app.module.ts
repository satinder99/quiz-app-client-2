import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeService} from './services/home.service'
import { 
  SocialLoginModule, 
  AuthServiceConfig,
 
} from 'angularx-social-login';

import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


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
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
