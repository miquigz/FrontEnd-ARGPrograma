import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/core/interfaces/experiencia-laboral.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  // expLaboral:ExperienciaLaboral[];

  expLaboral:ExperienciaLaboral[] = [
    {
      id: 0,
      anio: "2022-Actual",
      desc: "Aun no poseo experiencia laboral",
      img: "",
      altImg: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
