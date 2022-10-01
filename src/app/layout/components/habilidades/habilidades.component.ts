import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Habilidades } from 'src/app/core/interfaces/habilidades.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit, NgCircleProgressModule {

  habilidadesFront: Habilidades[] = [
    {
    id:0,
    titulo: 'CSS',
    porcentaje: 85,
    duracionAnimacion: 1400,
    animacion:true,
    radio:100,
    tamTitulo:'34',
    tamUnidad: '0',
    mostrarImg:true,
    altoImg:110,
    anchoImg:110,
    imgSrc:"../../../../assets/images-habilidades/css-logo.png",
  },
  {
    id:1,
    titulo: 'BootStrap',
    porcentaje: 76,
    duracionAnimacion: 1400,
    animacion:true,
    radio:100,
    tamTitulo:'27',
    tamUnidad: '0',
    mostrarImg:true,
    altoImg:110,
    anchoImg:110,
    imgSrc:"../../../../assets/images-habilidades/bootstrap-logo.png",
  },
  {
    id:2,
    titulo: 'TailWindCSS',
    porcentaje: 85,
    duracionAnimacion: 1400,
    animacion:true,
    radio:100,
    tamTitulo:'24',
    tamUnidad: '0',
    mostrarImg:true,
    altoImg:92,
    anchoImg:110,
    imgSrc:"../../../../assets/images-habilidades/tailwindcss-logo.png"
  },
  {
    id:3,
    titulo: 'Sass',
    porcentaje: 56,
    duracionAnimacion: 1400,
    animacion:true,
    radio:100,
    tamTitulo:'34',
    tamUnidad: '0',
    mostrarImg:true,
    altoImg:98,
    anchoImg:110,
    imgSrc:"../../../../assets/images-habilidades/sass-logo.png"
  },
  {
    id:4,
    titulo: 'JavaScript',
    porcentaje: 71,
    duracionAnimacion: 1400,
    animacion:true,
    radio:100,
    tamTitulo:'29',
    tamUnidad: '0',
    mostrarImg:true,
    altoImg:100,
    anchoImg:100,
    imgSrc:"../../../../assets/images-habilidades/js-logo.png"
  },
  {
    id:5,
    titulo: 'Angular',
    porcentaje: 68,
    duracionAnimacion: 1400,
    animacion:true,
    radio:100,
    tamTitulo:'34',
    tamUnidad: '0',
    mostrarImg:true,
    altoImg:110,
    anchoImg:110,
    imgSrc:"../../../../assets/images-habilidades/angular-logo.png",
  }
]

  habilidadesBack: Habilidades[] = [
    {
      id:5,
      titulo: 'NodeJS',
      porcentaje: 55,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:110,
      anchoImg:100,
      imgSrc:"../../../../assets/images-habilidades/node-js-logo.png"
    },{
      id:11,
      titulo: 'ExpressJS',
      porcentaje: 100,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:75,
      anchoImg:130,
      imgSrc:"../../../../assets/images-habilidades/expressjs-logo.png"
    },
    {
      id:6,
      titulo: 'MongoDB',
      porcentaje: 48,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'30',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:105,
      anchoImg:110,
      imgSrc:"../../../../assets/images-habilidades/mongodb-logo.png"
    },
    {
      id:9,
      titulo: 'Java',
      porcentaje: 45,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:110,
      anchoImg:110,
      imgSrc:"../../../../assets/images-habilidades/java-logo1.png",
    },
    {
      id:10,
      titulo: 'SpringBoot',
      porcentaje: 39,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'27',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:90,
      anchoImg:110,
      imgSrc:"../../../../assets/images-habilidades/springboot-logo.png",
    },
    {
      id:11,
      titulo: 'SQL',
      porcentaje: 100,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:110,
      anchoImg:110,
      imgSrc:"../../../../assets/images-habilidades/sql-logo.png"
    }
  ]
  
  toolsAndSoftSkills: Habilidades[] = [
    {
      id:0,
      titulo: 'Git',
      porcentaje: 76,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'27',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:110,
      anchoImg:110,
      imgSrc:"../../../../assets/images-habilidades/git-logo.png",
    },
    {
      id:1,
      titulo: 'WebPack',
      porcentaje: 68,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:110,
      anchoImg:110,
      imgSrc:"../../../../assets/images-habilidades/webpack-logo.png",
    },
    {
      id:2,
      titulo: 'WebPack',
      porcentaje: 68,
      duracionAnimacion: 1400,
      animacion:true,
      radio:100,
      tamTitulo:'34',
      tamUnidad: '0',
      mostrarImg:true,
      altoImg:110,
      anchoImg:110,
      imgSrc:"../../../../assets/images-habilidades/npm-logo.png",
    }
    
  ]
  
  constructor() { }



  ngOnInit(): void {
  }

}
