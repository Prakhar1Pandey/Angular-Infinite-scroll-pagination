import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInfiniteScrollAnimationComponent } from './ngx-infinite-scroll-animation.component';

describe('NgxInfiniteScrollAnimationComponent', () => {
  let component: NgxInfiniteScrollAnimationComponent;
  let fixture: ComponentFixture<NgxInfiniteScrollAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxInfiniteScrollAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxInfiniteScrollAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
