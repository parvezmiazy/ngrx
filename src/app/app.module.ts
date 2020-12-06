import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from './customers/customers.service';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerComponent } from './customers/customer/customer.component';
@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule
  ],
  
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
