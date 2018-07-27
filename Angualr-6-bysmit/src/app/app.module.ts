import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material';
import { EmployeeServiceService } from './employee/service/employee-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { LoginComponent } from './auth/login/login.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { AgmCoreModule } from '@agm/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewEmployeeComponent,
    EmployeeListComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE_API_GOSE_HERE',
      libraries: ["places"]
    }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })

  ],
  providers: [
    EmployeeServiceService,{
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
