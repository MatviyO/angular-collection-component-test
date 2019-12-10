import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMessageComponent } from './profile-message.component';

describe('ProfileMessageComponent', () => {
  let component: ProfileMessageComponent;
  let fixture: ComponentFixture<ProfileMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
