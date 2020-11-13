import { Component, OnInit } from '@angular/core';
import { Pago } from '../models/pago';

@Component({
  
  selector: 'app-pago-consulta',
  templateUrl: './pago-consulta.component.html',
  styleUrls: ['./pago-consulta.component.css']
})

export class PagoConsultaComponent implements OnInit {
  searchText: string;
  pagos: Pago[];
  
  constructor() { }

  ngOnInit(): void {

  }

}
