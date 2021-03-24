import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToDoComponent } from './user-to-do.component';

describe('UserToDoComponent', () => {
  let component: UserToDoComponent;
  let fixture: ComponentFixture<UserToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
