import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricing } from './pricing';

describe('Pricing', () => {
  let component: Pricing;
  let fixture: ComponentFixture<Pricing>;

  beforeEach(async () => {
    spyOn(globalThis, 'fetch').and.resolveTo({
      ok: true,
      json: async () => ({
        country: 'IN',
        currency: 'INR',
        monthly: {
          actualPrice: 1999,
          promoPrice: 1499,
        },
        yearly: {
          actualPrice: 19999,
          promoPrice: 17988,
        },
      }),
    } as Response);

    await TestBed.configureTestingModule({
      imports: [Pricing],
    }).compileComponents();

    fixture = TestBed.createComponent(Pricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
