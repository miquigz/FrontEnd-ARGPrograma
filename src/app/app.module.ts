import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PerfilComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
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
      "lazy": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
