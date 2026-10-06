import { Routes } from '@angular/router';
import { LandingLayout } from './layout/landing-layout/landing-layout';
import { Landing } from './pages/landing/landing';
import { FeaturesPage } from './pages/features-page/features-page';
import { Pricing } from './pages/pricing/pricing';
import { Signup } from './pages/signup/signup';
import { SignupSuccess } from './pages/signup-success/signup-success';

export const routes: Routes = [
  // Landing Layout
  {
    path: '',
    component: LandingLayout,
    children: [
      { path: '', component: Landing }
    ]
  },
  {
    path: 'features',
    component: FeaturesPage,
  },
  {
    path: 'pricing',
    component: Pricing,
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: 'signup/success',
    component: SignupSuccess,
  },
];
