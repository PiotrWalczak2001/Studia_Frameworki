import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPanelComponent } from './login-panel.component';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginPanelComponent
  ],
  imports: [
    FontAwesomeModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    LoginPanelComponent,
  ]
})

export class LoginPanelModule { }
