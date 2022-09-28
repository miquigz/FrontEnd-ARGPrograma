import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { LayoutComponent } from './layout/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), NgCircleProgressModule.forRoot({}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
