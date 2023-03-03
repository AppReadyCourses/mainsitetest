import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpMainComponent } from './help-main/help-main.component';

const routes: Routes = [
  {
    path: '',
    component: HelpMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRoutingModule {}
