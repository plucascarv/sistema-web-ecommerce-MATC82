import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDealComponent } from './day-deal.component';

describe('DayDealComponent', () => {
  let component: DayDealComponent;
  let fixture: ComponentFixture<DayDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayDealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
