import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomTextAreaComponent } from './Components/custom-text-area/custom-text-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { SecondcustomTextAreaComponent } from './Components/secondcustom-text-area/secondcustom-text-area.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomTextAreaComponent,
    SecondcustomTextAreaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
