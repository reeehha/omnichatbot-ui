import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Plan {
  name: string;
  /** Identifier used to match this plan against the backend pricing-context API; defaults to `name` when omitted. */
  apiPlanId?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  accent?: string;
  pricing: {
    monthly: {
      amount: number | null;
      promoAmount?: number | null;
    };
    annually: {
      amount: number | null;
      promoAmount?: number | null;
    };
  };
}

interface PricingContextPlan {
  plan: string;
  monthly?: {
    actualPrice?: number;
    promoPrice?: number;
  };
  yearly?: {
    actualPrice?: number;
    promoPrice?: number;
  };
}

interface PricingContextResponse {
  country?: string;
  currency?: CurrencyCode;
  plans?: PricingContextPlan[];
}

type BillingCycle = 'monthly' | 'annually';
type CurrencyCode = 'AED' | 'OMR' | 'INR' | 'QAR';

@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.html',
  imports: [CommonModule, RouterLink],
  styleUrls: ['./pricing.css'],
})
export class Pricing implements OnInit {
  readonly salesWhatsappUrl = 'https://wa.me/971522672743';
  readonly termsUrl = 'https://omnifai-fzco.com/terms-of-use';
  readonly pricingContextEndpoint = 'https://nhozrszypc.execute-api.us-east-1.amazonaws.com/default/api/pricing-context';
  // readonly pricingContextEndpoint = 'http://localhost:8081/api/pricing-context';
  readonly collapsedFeatureCount = 5;
  readonly expandedPlans: Record<string, boolean> = {};
  pricingReady = false;
  pricingLoadFailed = false;
  currencyCode: CurrencyCode = this.detectCurrencyCode();
  countryCode = '';
  billingCycle: BillingCycle = 'monthly';

  plans: Plan[] = [
    {
      name: 'Free',
      features: [
        '0% Markup Fees',
        '2 Team Members',
        'Catalog Management',
        '20 subscribers',
        'Checkout Assistance',
        'Service/appointment scheduling with Google Calendar',
        'Automated Follow Up Messages',
        'Campaign Manager',
        'Unlimited Message Credits',
        'Bulk WhatsApp Messaging',
        'Multi Agent Shared Inbox',
        'Drag & Drop Chatbot Builder',
        'Messaging Template Management',
        'Zapier Integration',
        'Carousel Messages',
      ],
      buttonText: 'Get Started',
      accent: 'Free',
      pricing: {
        monthly: {
          amount: 0,
        },
        annually: {
          amount: 0,
        },
      },
    },
    {
      name: 'Pro',
      apiPlanId: 'pro',
      features: [
        'Everything in Free',
        '5 Team Members',
        'Unlimited AI Agent',
        'Manager Monitoring',
        'Unlimited AI Message',
        'On-Call Support',
        '6000 subscribers',
      ],
      buttonText: 'Get Started',
      accent: 'Starter',
      pricing: {
        monthly: {
          amount: 149,
          promoAmount: 99,
        },
        annually: {
          amount: 1788,
          promoAmount: 1069,
        },
      },
    },
    {
      name: 'Ultimate',
      features: [
        'Everything in Pro',
        '15000 subscribers',
        '10 Team Members',
        'Custom Webhook Listener',
        'Shopify Integration',
        'Priority Support',
        'Custom Integrations',
      ],
      buttonText: 'Get Started',
      isPopular: true,
      accent: 'Popular',
      pricing: {
        monthly: {
          amount: 299,
        },
        annually: {
          amount: 3229,
        },
      },
    },
    {
      name: 'Enterprise',
      features: [
        'Everything in Ultimate+',
        'Unlimited team members',
        'High Volume Subscribers',
        'Priority Support',
        'Custom Integrations',
        'Dedicated Account Manager',
      ],
      buttonText: 'Get Started',
      accent: 'Custom',
      pricing: {
        monthly: {
          amount: null,
        },
        annually: {
          amount: null,
        },
      },
    },
  ];

  ngOnInit(): void {
    void this.loadPricingContext();
  }

  formatPrice(priceAed: number | null): string {
    if (priceAed === null) {
      return '0';
    }

    return `${this.currencyCode} ${priceAed}`;
  }

  getCurrencySubtitle(): string {
    return `All prices shown in ${this.currencyCode}`;
  }

  getBillingLabel(): string {
    return this.billingCycle === 'annually' ? 'Annually' : 'Monthly';
  }

  getBillingPeriodLabel(): string {
    return this.billingCycle === 'annually' ? 'per year' : 'per month';
  }

  getSelectedPrice(plan: Plan): number | null {
    return plan.pricing[this.billingCycle].amount;
  }

  getSelectedPromoPrice(plan: Plan): number | null {
    return plan.pricing[this.billingCycle].promoAmount ?? null;
  }

  hasCustomPricing(plan: Plan): boolean {
    return this.getSelectedPrice(plan) === null;
  }

  getCustomPricingLabel(plan: Plan): string {
    return plan.name === 'Enterprise' ? 'Customised plans' : 'Contact sales';
  }

  getSignupQueryParams(planName: string): Record<string, string> {
    return {
      plan: planName,
      billing: this.billingCycle,
      currency: this.currencyCode,
    };
  }

  setBillingCycle(billingCycle: BillingCycle): void {
    this.billingCycle = billingCycle;
  }

  openSalesChat(): void {
    window.location.href = this.salesWhatsappUrl;
  }

  togglePlan(planName: string): void {
    this.expandedPlans[planName] = !this.expandedPlans[planName];
  }

  isPlanExpanded(planName: string): boolean {
    return !!this.expandedPlans[planName];
  }

  visibleFeatures(plan: Plan): string[] {
    return this.isPlanExpanded(plan.name)
      ? plan.features
      : plan.features.slice(0, this.collapsedFeatureCount);
  }

  private async loadPricingContext(): Promise<void> {
    try {
      const context = await this.getPricingContext();
      this.applyPricingContext(context);
      this.pricingReady = true;
    } catch {
      this.pricingLoadFailed = true;
    }
  }

  private async getPricingContext(): Promise<PricingContextResponse> {
    const response = await fetch(this.pricingContextEndpoint, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Pricing context request failed with status ${response.status}`);
    }

    return response.json() as Promise<PricingContextResponse>;
  }

  private applyPricingContext(context: PricingContextResponse): void {
    if (context.country) {
      this.countryCode = context.country;
    }

    if (context.currency) {
      this.currencyCode = context.currency;
    }

    for (const planContext of context.plans ?? []) {
      const planIndex = this.plans.findIndex(
        (plan) => (plan.apiPlanId ?? plan.name).toLowerCase() === planContext.plan.toLowerCase(),
      );
      if (planIndex === -1) {
        continue;
      }

      const plan = this.plans[planIndex];
      const monthly = planContext.monthly;
      const yearly = planContext.yearly;

      this.plans[planIndex] = {
        ...plan,
        pricing: {
          monthly: {
            ...plan.pricing.monthly,
            amount: monthly?.actualPrice ?? plan.pricing.monthly.amount,
            promoAmount: monthly?.promoPrice ?? plan.pricing.monthly.promoAmount,
          },
          annually: {
            ...plan.pricing.annually,
            amount: yearly?.actualPrice ?? plan.pricing.annually.amount,
            promoAmount: yearly?.promoPrice ?? plan.pricing.annually.promoAmount,
          },
        },
      };
    }
  }

  private detectCurrencyCode(): CurrencyCode {
    const locale = this.getBrowserLocale();
    const region = this.extractRegionCode(locale);

    if (region === 'OM') {
      return 'OMR';
    }

    if (region === 'AE') {
      return 'AED';
    }

    if (region === 'QA') {
      return 'QAR';
    }

    const timeZone = typeof Intl !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : '';

    if (timeZone === 'Asia/Muscat') {
      return 'OMR';
    }

    if (timeZone === 'Asia/Qatar') {
      return 'QAR';
    }

    return 'AED';
  }

  hasMoreFeatures(plan: Plan): boolean {
    return plan.features.length > this.collapsedFeatureCount;
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
}
