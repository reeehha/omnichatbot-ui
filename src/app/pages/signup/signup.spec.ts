import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Signup } from './signup';

describe('Signup', () => {
  let component: Signup;
  let fixture: ComponentFixture<Signup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require privacy policy acceptance before enabling submit', () => {
    component.signupForm.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      referral: 'TX#123',
      chatbotCountry: 'United States',
      chatbotNumber: '1234567890',
      contactCountry: 'United States',
      contactNumber: '1234567890',
      orgDetails: 'This is a valid organization description.',
      sector: 'Other',
      sectorOther: 'Retail',
      sellType: 'product',
      location: 'Muscat',
      assistMode: 'display',
      privacyPolicyAccepted: false,
    });
    component['syncConditionalValidators']();
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(By.css('.submit-btn'));
    expect(submitButton.nativeElement.disabled).toBeTrue();

    component.signupForm.controls.privacyPolicyAccepted.setValue(true);
    component.signupForm.controls.privacyPolicyAccepted.markAsTouched();
    fixture.detectChanges();

    expect(component.canSubmit).toBeTrue();
  });

  it('should include referral in the signup payload when provided', () => {
    component.signupForm.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      referral: 'TX#123',
      chatbotCountry: 'United States',
      chatbotNumber: '1234567890',
      contactCountry: 'United States',
      contactNumber: '1234567890',
      orgDetails: 'This is a valid organization description.',
      sector: 'Other',
      sectorOther: 'Retail',
      sellType: 'product',
      location: 'Muscat',
      assistMode: 'display',
      privacyPolicyAccepted: true,
    });

    const payload = component['buildPayload']();

    expect(payload).toEqual(jasmine.objectContaining({
      referral: 'dubai',
    }));
  });

  it('should use the production signup endpoint without query params', () => {
    expect(component['buildSignupEndpointUrl']()).toBe(
      'https://hmliiq40k5.execute-api.us-east-1.amazonaws.com/prod/api/org/signup'
    );
  });
});
