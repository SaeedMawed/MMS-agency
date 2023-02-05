import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwSectionComponent } from './tw-section.component';

describe('TwSectionComponent', () => {
  let component: TwSectionComponent;
  let fixture: ComponentFixture<TwSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
