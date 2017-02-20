import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { PageLoader } from './loader/loader.component';
import { LoginHeader } from "./headers/login/loginheader.component";
import { ProfileHeader } from "./headers/profile/profileheader.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    routedComponents,
    PageLoader,
    LoginHeader,
    ProfileHeader,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
