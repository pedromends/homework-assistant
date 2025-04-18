import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSubjectProgressComponent } from './card-subject-progress.component';

describe('CardSubjectProgressComponent', () => {
  let component: CardSubjectProgressComponent;
  let fixture: ComponentFixture<CardSubjectProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSubjectProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSubjectProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
