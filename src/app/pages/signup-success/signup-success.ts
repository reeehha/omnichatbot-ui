import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './signup-success.html',
  styleUrl: './signup-success.css',
})
export class SignupSuccess {
  email = '';
  passwordSetupUrl = '';
  dashboardUrl = 'https://nhozrszypc.execute-api.us-east-1.amazonaws.com/default';

  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.queryParamMap;
    this.email = params.get('email') ?? '';
    this.passwordSetupUrl =
      params.get('setPasswordUrl') ??
      params.get('passwordSetupUrl') ??
      params.get('set_password_url') ??
      params.get('resetPasswordUrl') ??
      params.get('reset_password_url') ??
      params.get('dashboardUrl') ??
      this.passwordSetupUrl;
    this.dashboardUrl = params.get('dashboardUrl') ?? this.dashboardUrl;
  }
}
