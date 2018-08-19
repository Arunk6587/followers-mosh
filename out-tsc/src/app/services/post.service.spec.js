import { TestBed, inject } from '@angular/core/testing';
import { PostService } from './post.service';
describe('PostService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PostService]
        });
    });
    it('should be created', inject([PostService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=post.service.spec.js.map