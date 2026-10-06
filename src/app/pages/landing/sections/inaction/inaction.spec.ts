import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inaction } from './inaction';

describe('Inaction', () => {
  let component: Inaction;
  let fixture: ComponentFixture<Inaction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inaction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inaction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
