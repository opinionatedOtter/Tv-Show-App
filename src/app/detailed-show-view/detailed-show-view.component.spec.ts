import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedShowViewComponent } from './detailed-show-view.component';

describe('DetailedShowViewComponent', () => {
  let component: DetailedShowViewComponent;
  let fixture: ComponentFixture<DetailedShowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedShowViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedShowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
