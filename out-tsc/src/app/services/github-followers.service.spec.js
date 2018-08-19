import { TestBed, inject } from '@angular/core/testing';
import { GithubFollwersService } from './github-followers.service';
describe('GithubFollwersService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [GithubFollwersService]
        });
    });
    it('should be created', inject([GithubFollwersService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=github-followers.service.spec.js.map