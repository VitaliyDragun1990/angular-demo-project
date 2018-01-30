import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // get both parameters and query parameters at once - subscribe to several observables
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(
        switchMap(combined => {
          // combined[0].get('id');
          let page = combined[1].get('page');

          return this.service.getAll();
        })
      )
      .subscribe(followers => this.followers = followers);
  }

}
