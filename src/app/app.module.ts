import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { SignupButtonComponent } from './shared/signup-button/signup-button.component';
import { LogoutButtonComponent } from './shared/logout-button/logout-button.component';
import { LoginButtonComponent } from './shared/login-button/login-button.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PageLoaderComponent } from './shared/page-loader.component';
import { PageLayoutComponent } from './shared/page-layout.component';
import { HomeComponent } from './features/home/home.component';
import { BankingComponent } from './features/banking/banking.component';
import { ClientsComponent } from './features/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    LoginButtonComponent,
    NavBarComponent,
    PageLoaderComponent,
    PageLayoutComponent,
    HomeComponent,
    BankingComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: environment.auth0.authorizationParams.redirect_uri,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PageLoaderComponent,
    PageLayoutComponent
  ],
})
export class AppModule {}
