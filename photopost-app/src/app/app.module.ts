import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPanelModule } from './login-panel/login-panel.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PostBoardComponent } from './main-dashboard/post-board/post-board.component';
import { PhotoBoardComponent } from './main-dashboard/photo-board/photo-board.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './main-dashboard/post-board/components/post-component/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostBoardComponent,
    PhotoBoardComponent,
    PageNotFoundComponent,
    PostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NavBarModule,
    LoginPanelModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
