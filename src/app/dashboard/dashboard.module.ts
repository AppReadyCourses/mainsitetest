import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardMainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavbarModule,
    AngularSvgIconModule,
    SharedModule,
  ],
})
export class DashboardModule {}
