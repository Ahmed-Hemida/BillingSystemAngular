import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'help', component: HelpComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignupComponent },
  { path: 'wallet', component: WalletComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }