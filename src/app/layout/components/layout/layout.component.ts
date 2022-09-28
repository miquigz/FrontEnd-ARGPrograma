import { Component, OnInit } from '@angular/core';
import { LayoutModule } from '../../layout.module';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit, LayoutModule {

  constructor() { }

  ngOnInit(): void {
  }

}
