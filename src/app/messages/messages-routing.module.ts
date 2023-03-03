import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesMainComponent } from './messages-main/messages-main.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesRoutingModule {}
