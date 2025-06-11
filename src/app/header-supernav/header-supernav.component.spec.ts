import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSupernavComponent } from './header-supernav.component';

describe('HeaderSupernavComponent', () => {
  let component: HeaderSupernavComponent;
  let fixture: ComponentFixture<HeaderSupernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSupernavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSupernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
