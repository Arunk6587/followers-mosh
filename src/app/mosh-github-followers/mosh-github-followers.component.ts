import { Component, OnInit } from '@angular/core';
import { GithubFollwersService } from '../services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-mosh-github-followers',
  templateUrl: './mosh-github-followers.component.html',
  styleUrls: ['./mosh-github-followers.component.css']
})
export class MoshGithubFollowersComponent implements OnInit {

  followers: [any];

  constructor(private route: ActivatedRoute, private service: GithubFollwersService) { }

  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');
      return this.service.getAll();
    })
    .subscribe(followers => {
      this.followers = followers;
    });




      // params and query params received can be processed at same time to load the request from server
      // this.route.queryParamMap
      // .subscribe(params => {
      //   console.log(params);
      // });

      // this.route.paramMap
      // .subscribe(params => {
      //   console.log(params);
      // });
  }
}

