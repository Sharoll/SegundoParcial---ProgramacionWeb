import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pago } from '../models/pago';

@Component({
  selector: 'app-pago-registro',
  templateUrl: './pago-registro.component.html',
  styleUrls: ['./pago-registro.component.css']
})
export class PagoRegistroComponent implements OnInit {
  formGroup: FormGroup;
  controlPago: Pago;

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.InicializarFormulario();
  }

  Registrar() {
    
  }

  InicializarFormulario() {
    this.formGroup = this.formBuilder.group({
      codPersona: ['', Validators.required],
      tipoPago: ['', Validators.required],
      fecha: [, Validators.required],
      valorPago: [0, Validators.required],
      valorIvaPago: [0, Validators.required]
    });
  }

  get formulario() { return this.formGroup.controls; }
  get codPersona() { return this.formGroup.get("codPersona"); }
  get tipoPago() { return this.formGroup.get("tipoPago"); }
  get fecha() { return this.formGroup.get("fecha"); }
  get valorPago() { return this.formGroup.get("valorPago"); }
  get valorIvaPago() { return this.formGroup.get("valorIvaPago"); }
}
