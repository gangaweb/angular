import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute , Routes, RouterModule,RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { StartappComponent } from './startapp/startapp.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './token.interceptor';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app.settings';


const routes: Routes =[
 
  { 
  	path:'', 
  	component: StartappComponent, 
  },
  { 
  	path: 'register', 
  	component: RegisterComponent ,
  }

];


@NgModule({
  imports: [

      FormsModule,
      JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: [AppSettings.DOMAIN]
        }
      }),
      RouterModule.forRoot(
      routes
    ),
  ],

  providers: [

    AppSettings,    
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    HttpClient
  ],
  
  declarations: [],
    exports: [RouterModule]

})
export class AppRoutingModule { }
