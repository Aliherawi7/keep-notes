import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenLoadingComponent } from './full-screen-loading.component';

describe('FullScreenLoadingComponent', () => {
  let component: FullScreenLoadingComponent;
  let fixture: ComponentFixture<FullScreenLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenLoadingComponent]
    });
    fixture = TestBed.createComponent(FullScreenLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
