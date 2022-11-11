import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoBoardComponent } from './main-dashboard/photo-board/photo-board.component';
import { PostBoardComponent } from './main-dashboard/post-board/post-board.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostBoardComponent },
  { path: 'photos', component: PhotoBoardComponent },
  { path: 'userProfile/:userId', component: UserProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}