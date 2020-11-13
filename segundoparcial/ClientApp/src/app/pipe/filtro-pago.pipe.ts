import { Pipe, PipeTransform } from '@angular/core';
import { Pago } from '../gastosDiarios/models/pago';
import { Persona } from '../gastosDiarios/models/persona';


@Pipe({
  name: 'filtroPago'
})
export class FiltroPagoPipe implements PipeTransform {

  transform(pagos: Pago[], searchText: string): any  {

    if (searchText == null) return pagos;

    return pagos.filter(p => p.tipoPago.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || p.codPersona.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
