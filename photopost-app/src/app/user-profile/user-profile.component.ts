import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/entity-models/user-model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {

  user: Observable<User>;

  constructor(private cd: ChangeDetectorRef, private httpService: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.user = this.httpService.getUserById(userId);
  }

}