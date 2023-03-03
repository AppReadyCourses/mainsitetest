import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesMainComponent } from './messages-main/messages-main.component';
import { NavbarModule } from '../navbar/navbar.module';
import { MessagesRoutingModule } from './messages-routing.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MessageDetailComponent } from './message-detail/message-detail.component';

@NgModule({
  declarations: [MessagesMainComponent, MessageDetailComponent],
  imports: [
    CommonModule,
    NavbarModule,
    MessagesRoutingModule,
    AngularSvgIconModule,
  ],
})
export class MessagesModule {}
