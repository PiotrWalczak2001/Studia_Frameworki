import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/entity-models/post-model';
import { User } from 'src/app/models/entity-models/user-model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoBoardComponent implements OnInit {

  posts: Observable<Post[]>
  users: User[];

  constructor(private cd: ChangeDetectorRef, private httpService: HttpService) {
  }

  ngOnInit() {
    this.posts = this.httpService.getAllPosts();
  }

}