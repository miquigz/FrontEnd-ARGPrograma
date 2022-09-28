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
    RouterModule.forRoot(routes), NgCircleProgressModule.forRoot({
      "backgroundGradient": true,
      "backgroundColor": "#80dbf9",
      "backgroundGradientStopColor": "#6b9bb3",
      "backgroundOpacity": 0.8,
      "backgroundStroke": "#b3d5e6",
      "backgroundStrokeWidth": 12,
      "backgroundPadding": -20,
      "radius": 84,
      "space": 6,
      "toFixed": 0,
      "maxPercent": 100,
      "unitsFontSize": "32",
      "unitsColor": "#bdfbff",
      "outerStrokeGradient": true,
      "outerStrokeWidth": 6,
      "outerStrokeColor": "#9daee1",
      "outerStrokeGradientStopColor": "#6a97c8",
      "innerStrokeColor": "#c1dfec",
      "innerStrokeWidth": 6,
      "titleColor": "#24404c",
      "titleFontSize": "34",
      "titleFontWeight": "400",
      "subtitleColor": "#000000",
      "subtitleFontSize": "18",
      "imageHeight": 20,
      "imageWidth": 20,
      "animationDuration": 1400,
      "lazy": true}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
