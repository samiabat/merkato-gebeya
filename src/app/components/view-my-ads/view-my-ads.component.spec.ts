import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyAdsComponent } from './view-my-ads.component';

describe('ViewMyAdsComponent', () => {
  let component: ViewMyAdsComponent;
  let fixture: ComponentFixture<ViewMyAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMyAdsComponent]
    });
    fixture = TestBed.createComponent(ViewMyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
