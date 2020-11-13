import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PagoService } from 'src/app/services/pago.service';
import { Pago } from '../models/pago';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-pago-registro',
  templateUrl: './pago-registro.component.html',
  styleUrls: ['./pago-registro.component.css']
})
export class PagoRegistroComponent implements OnInit {
  formGroup: FormGroup;
  persona: Persona;
  pago: Pago;

  constructor(private pagoService: PagoService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pago = new Pago();
    this.buildForm();
  }
  private buildForm(){
    this.pago.codPersona = '';
    this.pago.tipoPago = '';
    this.pago.fechaPago = new Date(Date.now());
    this.pago.valorPago = 0;
    this.pago.valorIvaPago = 0;
    this.formGroup = this.formBuilder.group({
      codPersona: [this.pago.codPersona, Validators.required],
      tipoPago: [this.pago.tipoPago, Validators.required],
      fechaPago: [this.pago.fechaPago, Validators.required],
      valorPago: [this.pago.valorPago, Validators.required],
      valorIvaPago:[this.pago.valorIvaPago, Validators.required],
      
    });
   
  }

  onSubmit() {
        if (this.formGroup.invalid) {
          return;
        }
        this.add();
  }
    

  add(){
    this.pago.codPersona = this.formGroup.value.codPersona;
    this.pago.tipoPago = this.formGroup.value.tipoPago;
    this.pago.fechaPago = this.formGroup.value.fechaPago;
    this.pago.valorPago = this.formGroup.value.valorPago;
    this.pago.valorIvaPago = this.formGroup.value.valorIvaPago;

    this.pagoService.post(this.pago).subscribe(p => {
      if (p != null) {
        alert('pago registrado');
        this.pago = p;
      }
    });
  }

  get control() { 
    return this.formGroup.controls;
  }
}
