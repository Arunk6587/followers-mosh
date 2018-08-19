import { async, TestBed } from '@angular/core/testing';
import { MoshGithubFollowersComponent } from './mosh-github-followers.component';
describe('MoshGithubFollowersComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MoshGithubFollowersComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MoshGithubFollowersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mosh-github-followers.component.spec.js.map