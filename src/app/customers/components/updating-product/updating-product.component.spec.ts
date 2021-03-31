import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingProductComponent } from './updating-product.component';

describe('UpdatingProductComponent', () => {
  let component: UpdatingProductComponent;
  let fixture: ComponentFixture<UpdatingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatingProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
