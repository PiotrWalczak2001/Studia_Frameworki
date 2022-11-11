import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    FontAwesomeModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})

export class NavBarModule { }
