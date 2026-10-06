import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Antidotes } from './antidotes';

describe('Antidotes', () => {
  let component: Antidotes;
  let fixture: ComponentFixture<Antidotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Antidotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Antidotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
