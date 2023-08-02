import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOnlineComponent } from './shop-online.component';

describe('ShopOnlineComponent', () => {
  let component: ShopOnlineComponent;
  let fixture: ComponentFixture<ShopOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopOnlineComponent]
    });
    fixture = TestBed.createComponent(ShopOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
