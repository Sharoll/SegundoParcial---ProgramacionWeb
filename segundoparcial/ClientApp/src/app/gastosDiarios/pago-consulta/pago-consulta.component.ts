import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/services/pago.service';
import { Pago } from '../models/pago';


@Component({
  
  selector: 'app-pago-consulta',
  templateUrl: './pago-consulta.component.html',
  styleUrls: ['./pago-consulta.component.css']
})

export class PagoConsultaComponent implements OnInit {
  pagos: Pago[];
  searchText: string;
  total:number;
  
  constructor(private pagoService: PagoService) { }

  ngOnInit(): void {
    this.total=0;
    this.get();
   // this.calcularvalortotal();
  }

   get (){
    this.pagoService.get().subscribe(result=>{
      this.pagos=result;
    });
    
  } 
 calcularvalortotal(){
  this.total=0;
    this.pagos.forEach(pago => {
      this.total = this.total + pago.valorPago;
    });
  } 

}
