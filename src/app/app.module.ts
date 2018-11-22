import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute , Routes, RouterModule,RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppSettings } from './app.settings';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { StartappComponent } from './startapp/startapp.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StartappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
