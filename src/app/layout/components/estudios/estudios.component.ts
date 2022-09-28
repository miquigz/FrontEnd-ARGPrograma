import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/core/interfaces/estudios.model';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  estudios: Estudios[] = [
    {
      id: 0,
      anio: "2021-Actual",
      desc: "Actualmente estudiando en la facultad de informatica de la <strong>Universidad Nacional de La Plata</strong>, en la carrera Analista en Tecnologías de la Información y la Comunicación.",
      img: "../../../assets/images-estudios/info.png",
      altImg:'Facultad de Informatica UNLP'
    },
    {
      id: 1,
      anio: "2022-Actual",
      desc: "Capacitandome en el programa <em> digitalers</em> creado por <strong>Telecom</strong> en conjunto de <strong>EducacionIT</strong>, en el bootcamp de NodeJS Developer, el cual tiene una duracion de 6 meses y una carga estimada de 306 horas.",
      img: "../../../assets/images-estudios/telecom-digitalers.png",
      altImg:'Logo Digitalers by Telecom y EducacionIT'
    },
    {
      id: 2,
      anio: "2022-Actual",
      desc: "Realizando la 2da cohorte de Argentina Programa (#YoProgramo), capacitandome para ser programador web full stack junior. Con una carga estimada de 480 horas a lo largo de 7 meses.",
      img: "../../../assets/images-header/APlogo.png",
      altImg: 'Argentina Programa Logo'
    },
    {
      id: 3,
      anio: "2021            ",
      desc: "-   Curso intensivo de Javascript CILSA La Plata",
      img: "../../../assets/images-estudios/cilsa.jpg",
      altImg: 'Logo Cilsa LP'
    },
    {
      id: 4,
      anio: "2021            ",
      desc: "-   Introduccion al desarrollo web FLACSO Argentina",
      img: "../../../assets/images-estudios/flacso.png",
      altImg: 'Logo Flacso Argentina'
    },
    {
      id: 2,
      anio: "2017-2019   ",
      desc: "- Itinerario Formativo Diseño Grafico Multimedial, EESN2 Verónica Buenos Aires.",
      img: "../../../assets/images-estudios/edem2.jpg",
      altImg: 'Escuela Secundaria Veronica Punta Indio'
    },
    {
      id: 2,
      anio: "2013-2019:   ",
      desc: "Secundaria: - Bachiller en Artes Visuales, EESN2 Verónica partido de Punta Indio, Buenos Aires.",
      img: "../../../assets/images-estudios/edem2.jpg",
      altImg: 'Escuela Secundaria Veronica Punta Indio'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
