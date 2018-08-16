import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshGithubFollowersComponent } from './mosh-github-followers.component';

describe('MoshGithubFollowersComponent', () => {
  let component: MoshGithubFollowersComponent;
  let fixture: ComponentFixture<MoshGithubFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoshGithubFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshGithubFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
