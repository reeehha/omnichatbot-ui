import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

type SellType = 'product' | 'service' | 'productService';
type AssistMode = 'assist' | 'display';
type PaymentMethod = 'gpayPhone' | 'paymentLinks' | 'cod';
type Sector = 'Arts' | 'Fashion & Beauty' | 'Health & Wellness' | 'Travel & Hospitality' | 'Food & Beverage' | 'E-commerce & Retail' | 'Business Services' | 'Professional Services' | 'Software & Services' | 'Other';
type CountryDialingCode = {
  name: string;
  code: string;
};
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  metric: string;
};

type SignupPayload = {
  name: string;
  email: string;
  referral?: string;
  plan: string;
  billing: string;
  currency: string;
  chatbotNumber: string;
  contactNumber: string;
  orgDetails: string;
  website: string;
  faqLink: string;
  orgSector: string;
  requirement: '0_Assist_till_checkout' | '1_Display_products';
  sellItems: Array<'0_Product' | '1_Service' | '2_Both'>;
  serviceArea: string;
  serviceproccess: string;
  deliveryArea: string;
  location: string;
  bankingName: string;
  accountNumber: string;
  ifsc: string;
  gpayNumber: string;
  paytmNumber: string;
  paymentLink: string;
};

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup implements OnInit {
  private fb = inject(FormBuilder);

  readonly sectors: Sector[] = [
    'Arts',
    'Fashion & Beauty',
    'Health & Wellness',
    'Travel & Hospitality',
    'Food & Beverage',
    'E-commerce & Retail',
    'Business Services',
    'Professional Services',
    'Software & Services',
    'Other',
  ];

  readonly countryDialingCodes: CountryDialingCode[] = [
    { name: 'United States', code: '+1' },
    { name: 'India', code: '+91' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Oman', code: '+968' },
    { name: 'Qatar', code: '+974' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Pakistan', code: '+92' },
  ];

  readonly sellTypes: { value: SellType; label: string; hint: string }[] = [
    { value: 'product', label: 'Product', hint: 'Best if you sell physical items that need delivery.' },
    { value: 'service', label: 'Service', hint: 'Best if you sell appointments, consulting, or labor.' },
    { value: 'productService', label: 'Product & Service', hint: 'Use both when you sell mixed offerings.' },
  ];

  readonly paymentMethods: { value: PaymentMethod; label: string; hint: string }[] = [
    { value: 'gpayPhone', label: 'GPay / Phone number', hint: 'Collect a UPI ID or mobile number.' },
    { value: 'paymentLinks', label: 'Payment links', hint: 'Collect a checkout or payment URL.' },
    { value: 'cod', label: 'Cash on delivery', hint: 'No extra payment detail is required.' },
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote: 'Our checkout conversion improved because the bot asks the right question at the right time.',
      name: 'Amina R.',
      role: 'Founder, Bloom & Craft',
      metric: '+31% conversion',
    },
    {
      quote: 'The product flow feels simple, but still captures all the data our team needs to follow up.',
      name: 'Jason P.',
      role: 'Ops Lead, Urban Pantry',
      metric: '2x faster onboarding',
    },
    {
      quote: 'We replaced a messy intake form with a clean guided flow. Leads now come in complete.',
      name: 'Noura S.',
      role: 'Owner, Nova Wellness',
      metric: '-44% drop-offs',
    },
  ];

  selectedPlan = 'No plan selected';
  selectedBilling = '';
  selectedCurrency = '';
  private selectedPlanValue = 'Free';
  private selectedBillingValue = 'monthly';
  private selectedCurrencyValue = 'AED';
  submitted = false;
  submissionState: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  submitMessage = '';
  submitError = '';
  submittedEmail = '';
  passwordSetupUrl = '';
  dashboardUrl = 'https://nhozrszypc.execute-api.us-east-1.amazonaws.com/default';
  signupEndpoint = 'https://hmliiq40k5.execute-api.us-east-1.amazonaws.com/prod/api/org/signup';
  activeTestimonialIndex = 0;
  private testimonialTimerId: number | undefined;

  readonly signupForm = this.fb.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      referral: [''],
      chatbotCountry: ['United States', [Validators.required]],
      chatbotNumber: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      contactCountry: ['United States', [Validators.required]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      orgDetails: ['', [Validators.required, Validators.minLength(15)]],
      website: ['', [Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i)]],
      sector: ['', [Validators.required]],
      sectorOther: [''],
      faqLink: ['', [Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i)]],
      sellType: ['', [Validators.required]],
      deliveryLocation: [''],
      serviceArea: [''],
      serviceProcesses: [''],
      productServiceLocation: [''],
      location: ['', [Validators.required]],
      assistMode: ['', [Validators.required]],
      paymentMethod: [''],
      paymentDetail: [''],
      privacyPolicyAccepted: [false, [Validators.requiredTrue]],
    },
  );

  constructor(
    private route: ActivatedRoute,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const plan = params.get('plan') || 'Free';
        const billing = params.get('billing') || 'monthly';
        const currency = (params.get('currency') || this.detectCurrencyCode()).toUpperCase();
        const referral = params.get('referral') || '';

        this.selectedPlanValue = plan;
        this.selectedBillingValue = billing;
        this.selectedCurrencyValue = currency;
        this.selectedPlan = `${plan} plan`;
        this.selectedBilling = `${billing} billing`;
        this.selectedCurrency = currency;
        this.signupForm.controls.referral.setValue(referral, { emitEvent: false });
      });

    this.signupForm.controls.sector.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.syncConditionalValidators());

    this.signupForm.controls.sellType.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.syncConditionalValidators());

    this.signupForm.controls.assistMode.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.syncConditionalValidators());

    this.signupForm.controls.paymentMethod.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.syncConditionalValidators());

    this.syncConditionalValidators();
    this.startTestimonialCarousel();
  }

  get chatbotCountryLabel(): string {
    return this.signupForm.controls.chatbotCountry.value || 'Select a country';
  }

  get contactCountryLabel(): string {
    return this.signupForm.controls.contactCountry.value || 'Select a country';
  }

  get sectorOtherVisible(): boolean {
    return this.signupForm.controls.sector.value === 'Other';
  }

  get sellType(): SellType | '' {
    return this.signupForm.controls.sellType.value as SellType | '';
  }

  get isProductOnly(): boolean {
    return this.sellType === 'product';
  }

  get isServiceOnly(): boolean {
    return this.sellType === 'service';
  }

  get isProductAndService(): boolean {
    return this.sellType === 'productService';
  }

  get assistMode(): AssistMode | '' {
    return this.signupForm.controls.assistMode.value as AssistMode | '';
  }

  get showPaymentOptions(): boolean {
    return this.assistMode === 'assist';
  }

  get paymentMethod(): PaymentMethod | '' {
    return this.signupForm.controls.paymentMethod.value as PaymentMethod | '';
  }

  get showPaymentDetailField(): boolean {
    return this.paymentMethod === 'gpayPhone' || this.paymentMethod === 'paymentLinks';
  }

  get paymentDetailLabel(): string {
    switch (this.signupForm.controls.paymentMethod.value as PaymentMethod | '') {
      case 'gpayPhone':
        return 'GPay UPI ID or phone number';
      case 'paymentLinks':
        return 'Payment link';
      default:
        return 'Payment detail';
    }
  }

  get paymentDetailPlaceholder(): string {
    switch (this.signupForm.controls.paymentMethod.value as PaymentMethod | '') {
      case 'gpayPhone':
        return 'example@bank or 98XXXXXXXX';
      case 'paymentLinks':
        return 'https://your-payment-link.example';
      default:
        return 'Enter the relevant payment detail';
    }
  }

  get activeTestimonial(): Testimonial {
    return this.testimonials[this.activeTestimonialIndex];
  }

  get showSuccessState(): boolean {
    return this.submissionState === 'success';
  }

  get showErrorState(): boolean {
    return this.submissionState === 'error' && !!this.submitError;
  }

  get canSubmit(): boolean {
    return this.submissionState !== 'submitting' && this.signupForm.valid;
  }

  isInvalid(name: string): boolean {
    const control = this.signupForm.get(name);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  errorMessage(name: string): string {
    const control = this.signupForm.get(name);

    if (!control || !(control.touched || this.submitted) || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'This field is required.';
    }

    if (control.errors['email']) {
      return 'Enter a valid email address.';
    }

    if (control.errors['minlength']) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `Enter at least ${requiredLength} characters.`;
    }

    if (control.errors['pattern']) {
      if (name === 'chatbotNumber' || name === 'contactNumber') {
        return 'Enter digits only, between 7 and 15 characters.';
      }

      if (name === 'website' || name === 'faqLink') {
        return 'Enter a valid website URL.';
      }

      if (name === 'paymentDetail' && this.signupForm.controls.paymentMethod.value === 'gpayPhone') {
        return 'Enter a valid UPI ID like name@bank or a phone number.';
      }

      if (name === 'paymentDetail' && this.signupForm.controls.paymentMethod.value === 'paymentLinks') {
        return 'Enter a valid payment link.';
      }

      return 'Enter a valid value.';
    }

    if (control.errors['requiredTrue']) {
      return 'You must agree to the privacy policy before submitting.';
    }

    return 'Enter a valid value.';
  }

  onSubmit(): void {
    this.submitted = true;
    this.syncConditionalValidators();

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.submissionState = 'idle';
      this.submitMessage = '';
      this.submitError = '';
      return;
    }

    void this.submitSignup();
  }

  setSellType(value: SellType): void {
    this.signupForm.controls.sellType.setValue(value);
    this.signupForm.controls.sellType.markAsTouched();
    this.syncConditionalValidators();
  }

  setAssistMode(value: AssistMode): void {
    this.signupForm.controls.assistMode.setValue(value);
    this.signupForm.controls.assistMode.markAsTouched();
    this.syncConditionalValidators();
  }

  setPaymentMethod(value: PaymentMethod): void {
    this.signupForm.controls.paymentMethod.setValue(value);
    this.signupForm.controls.paymentMethod.markAsTouched();
    this.syncConditionalValidators();
  }

  openDashboard(target: string = this.dashboardUrl): void {
    if (target) {
      window.location.href = target;
    }
  }

  openPasswordSetup(target: string = this.passwordSetupUrl): void {
    if (target) {
      window.location.href = target;
    }
  }

  closeSuccessModal(): void {
    this.submissionState = 'idle';
    this.submitMessage = '';
    this.submitError = '';
    this.passwordSetupUrl = '';
  }

  private syncConditionalValidators(): void {
    const sectorOther = this.signupForm.controls.sectorOther;
    const assistMode = this.signupForm.controls.assistMode.value as AssistMode | '';
    const paymentMethod = this.signupForm.controls.paymentMethod;
    const paymentDetail = this.signupForm.controls.paymentDetail;

    if (this.sectorOtherVisible) {
      sectorOther.setValidators([Validators.required, Validators.minLength(2)]);
    } else {
      sectorOther.clearValidators();
      sectorOther.setValue('', { emitEvent: false });
    }
    sectorOther.updateValueAndValidity({ emitEvent: false });

    this.signupForm.controls.location.setValidators([Validators.required, Validators.minLength(2)]);
    this.signupForm.controls.location.updateValueAndValidity({ emitEvent: false });

    if (assistMode !== 'assist') {
      paymentMethod.clearValidators();
      paymentMethod.setValue('', { emitEvent: false });
      paymentDetail.clearValidators();
      paymentDetail.setValue('', { emitEvent: false });
    } else {
      paymentMethod.setValidators([Validators.required]);

      if (paymentMethod.value === 'paymentLinks') {
        paymentDetail.setValidators([
          Validators.required,
          Validators.pattern(/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i),
        ]);
      } else if (paymentMethod.value === 'gpayPhone') {
        paymentDetail.setValidators([
          Validators.required,
          Validators.pattern(/^((\+?\d{10,15})|([\w.-]+@[\w.-]+))$/i),
        ]);
      } else if (paymentMethod.value === 'cod') {
        paymentDetail.clearValidators();
        paymentDetail.setValue('', { emitEvent: false });
      }
    }

    paymentMethod.updateValueAndValidity({ emitEvent: false });
    paymentDetail.updateValueAndValidity({ emitEvent: false });
  }

  private async submitSignup(): Promise<void> {
    this.submissionState = 'submitting';
    this.submitMessage = '';
    this.submitError = '';
    this.passwordSetupUrl = '';
    this.submittedEmail = '';

    const payload = this.buildPayload();

    try {
      const response = await fetch(this.buildSignupEndpointUrl(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Request failed with status ${response.status}`);
      }

      const data = await response.json().catch(() => ({}));
      this.dashboardUrl = data?.dashboardUrl || this.dashboardUrl;
      this.passwordSetupUrl = this.extractPasswordSetupLink(data);
      this.submittedEmail = payload.email;
      this.submissionState = 'success';
      this.submitMessage = 'Signup submitted successfully. Use the password setup link below before it expires.';
    } catch (error) {
      this.submissionState = 'error';
      this.submitError = error instanceof Error ? error.message : 'Signup request failed.';
    }
  }

  private buildPayload(): SignupPayload {
    const values = this.signupForm.getRawValue();
    const requirement: SignupPayload['requirement'] = values.assistMode === 'assist'
      ? '0_Assist_till_checkout'
      : '1_Display_products';

    return {
      name: values.name ?? '',
      email: values.email ?? '',
      ...(values.referral?.trim() ? { referral: values.referral.trim() } : {}),
      plan: this.getSelectedPlanValue(),
      billing: this.getSelectedBillingValue(),
      currency: this.getSelectedCurrencyValue(),
      chatbotNumber: `${this.resolveDialingCode(values.chatbotCountry)}${values.chatbotNumber ?? ''}`,
      contactNumber: `${this.resolveDialingCode(values.contactCountry)}${values.contactNumber ?? ''}`,
      orgDetails: values.orgDetails ?? '',
      website: values.website ?? '',
      faqLink: values.faqLink ?? '',
      orgSector: values.sector === 'Other' ? (values.sectorOther ?? '') : (values.sector ?? ''),
      requirement,
      sellItems: this.mapSellItems(values.sellType as SellType | ''),
      serviceArea: values.serviceArea ?? '',
      serviceproccess: values.serviceProcesses ?? '',
      deliveryArea: values.deliveryLocation ?? '',
      location: values.location ?? '',
      bankingName: '',
      accountNumber: '',
      ifsc: '',
      gpayNumber: values.paymentMethod === 'gpayPhone' ? (values.paymentDetail ?? '') : '',
      paytmNumber: '',
      paymentLink: values.paymentMethod === 'paymentLinks' ? (values.paymentDetail ?? '') : '',
    };
  }

  private buildSignupEndpointUrl(): string {
    return this.signupEndpoint;
  }

  private getSelectedPlanValue(): string {
    return this.selectedPlanValue;
  }

  private getSelectedBillingValue(): string {
    return this.selectedBillingValue;
  }

  private getSelectedCurrencyValue(): string {
    return this.selectedCurrencyValue;
  }

  private detectCurrencyCode(): string {
    const locale = this.getBrowserLocale();
    const region = this.extractRegionCode(locale);

    if (region === 'OM') {
      return 'OMR';
    }

    if (region === 'AE') {
      return 'AED';
    }

    const timeZone = typeof Intl !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : '';

    if (timeZone === 'Asia/Muscat') {
      return 'OMR';
    }

    return 'AED';
  }

  private getBrowserLocale(): string {
    if (typeof navigator === 'undefined') {
      return '';
    }

    return navigator.language || navigator.languages?.[0] || '';
  }

  private extractRegionCode(locale: string): string {
    const match = locale.toUpperCase().match(/-([A-Z]{2}|\d{3})\b/);
    return match?.[1] ?? '';
  }

  private resolveDialingCode(countryName: string | null | undefined): string {
    const country = this.countryDialingCodes.find((item) => item.name === countryName);
    return country?.code ?? '';
  }

  private extractPasswordSetupLink(response: unknown): string {
    const seen = new Set<unknown>();
    const candidateKeys = [
      'setPasswordUrl',
      'set_password_url',
      'resetPasswordLink',
      'reset_password_link',
      'resetPasswordUrl',
      'reset_password_url',
      'passwordResetLink',
      'password_reset_link',
      'passwordResetUrl',
      'password_reset_url',
      'resetLink',
      'reset_link',
      'passwordSetupLink',
      'password_setup_link',
      'passwordSetupUrl',
      'password_setup_url',
      'setupPasswordLink',
      'setup_password_link',
      'link',
      'url',
    ];

    const visit = (value: unknown, depth: number): string => {
      if (!value || typeof value !== 'object' || seen.has(value) || depth > 4) {
        return '';
      }

      seen.add(value);
      const record = value as Record<string, unknown>;

      for (const key of candidateKeys) {
        const direct = record[key];
        if (typeof direct === 'string' && direct.trim()) {
          return direct.trim();
        }
      }

      for (const key of ['data', 'result', 'payload', 'response']) {
        const nested = record[key];
        const nestedLink = visit(nested, depth + 1);
        if (nestedLink) {
          return nestedLink;
        }
      }

      for (const nested of Object.values(record)) {
        const nestedLink = visit(nested, depth + 1);
        if (nestedLink) {
          return nestedLink;
        }
      }

      return '';
    };

    return visit(response, 0);
  }

  private mapSellItems(sellType: SellType | ''): Array<'0_Product' | '1_Service' | '2_Both'> {
    switch (sellType) {
      case 'product':
        return ['0_Product'];
      case 'service':
        return ['1_Service'];
      case 'productService':
        return ['2_Both'];
      default:
        return [];
    }
  }

  private startTestimonialCarousel(): void {
    this.testimonialTimerId = window.setInterval(() => {
      this.activeTestimonialIndex = (this.activeTestimonialIndex + 1) % this.testimonials.length;
    }, 4200);

    this.destroyRef.onDestroy(() => {
      if (this.testimonialTimerId !== undefined) {
        window.clearInterval(this.testimonialTimerId);
      }
    });
  }
}
