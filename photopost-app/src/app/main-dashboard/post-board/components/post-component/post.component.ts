import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/entity-models/post-model';
import { User } from 'src/app/models/entity-models/user-model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

@Input() post: Post;

  constructor(private cd: ChangeDetectorRef, private httpService: HttpService) {
  }

  ngOnInit() {
    
  }

}