import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpMainComponent } from './help-main/help-main.component';
import { HelpRoutingModule } from './help-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HelpMainComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    NavbarModule,
    AngularSvgIconModule,
    SharedModule,
  ],
})
export class HelpModule {}
