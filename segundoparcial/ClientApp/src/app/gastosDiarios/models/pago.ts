export class Pago {
    codPago: string;
    tipoPago: string;
    fechaPago: Date;
    valorPago: number;
    codPersona: string;
    valorIvaPago: number;/* 
    total: number;
    totalvalor(pagos:Pago[]): number{
        this.total = 0;
        pagos.forEach(element => {
        alert(this.total);
        this.total = this.total + element.valorPago;
      });
      return this.total;
    } */
}

