import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Habilidades } from 'src/app/core/interfaces/habilidades.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit, NgCircleProgressModule {

  habilidades: Habilidades[] = [
    {
      id:1,
      titulo: 'CSS',
      porcentaje: 85,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0'
    },
    {
      id:2,
      titulo: 'TailWindCSS',
      porcentaje: 85,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'24',
      tamUnidad: '0'
    },
    {
      id:3,
      titulo: 'Sass',
      porcentaje: 56,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0'
    },
    {
      id:4,
      titulo: 'JavaScript',
      porcentaje: 71,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'29',
      tamUnidad: '0'
    },
    {
      id:5,
      titulo: 'NodeJS',
      porcentaje: 55,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0'
    },
    {
      id:6,
      titulo: 'MongoDB',
      porcentaje: 48,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'30',
      tamUnidad: '0'
    },
    {
      id:7,
      titulo: 'Angular',
      porcentaje: 68,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0'
    },
    {
      id:8,
      titulo: 'BootStrap',
      porcentaje: 76,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'27',
      tamUnidad: '0'
    },
    {
      id:9,
      titulo: 'Java',
      porcentaje: 45,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0'
    },
    {
      id:10,
      titulo: 'SpringBoot',
      porcentaje: 39,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'27',
      tamUnidad: '0'
    },
    {
      id:11,
      titulo: '---',
      porcentaje: 100,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0'
    },

  ]

  constructor() { }



  ngOnInit(): void {
  }

}
