import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
