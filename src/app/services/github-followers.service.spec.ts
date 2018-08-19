import { TestBed, inject } from '@angular/core/testing';

import { GithubFollwersService } from './github-followers.service';

describe('GithubFollwersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFollwersService]
    });
  });

  it('should be created', inject([GithubFollwersService], (service: GithubFollwersService) => {
    expect(service).toBeTruthy();
  }));
});
