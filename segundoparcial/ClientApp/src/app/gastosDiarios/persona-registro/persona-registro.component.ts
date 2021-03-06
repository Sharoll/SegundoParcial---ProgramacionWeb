import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { Pago } from '../models/pago';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  identificacion: string;
  formGroup: FormGroup;
  persona: Persona;
  pago: Pago;

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.persona = new Persona();
    this.pago = new Pago();
    this.buildForm();
  }
  private buildForm(){
    this.persona.tipoDocumento= '';
    this.persona.identificacion= '';
    this.persona.nombre = '';
    this.persona.direccion = '';
    this.persona.telefono = '';
    this.persona.pais = '';
    this.persona.departamento = '';
    this.persona.ciudad = '';
    this.pago.codPago = '';
    this.pago.tipoPago = '';
    this.pago.fechaPago = new Date(Date.now());
    this.pago.valorPago = 0;
    this.pago.valorIvaPago = 0;
    this.formGroup = this.formBuilder.group({
      tipoDocumento: [this.persona.tipoDocumento, Validators.required],
      identificacion: [this.persona.identificacion, Validators.required],
      nombre: [this.persona.nombre, Validators.required],
      direccion:[this.persona.direccion, Validators.required],
      telefono:[this.persona.telefono, Validators.required],
      pais: [this.persona.pais, Validators.required],
      departamento: [this.persona.departamento, [Validators.required, Validators.min(1)]],
      ciudad: [this.persona.ciudad, [Validators.required, Validators.min(1)]]
      
    });

    
}


  onSubmit() {

        if(this.formGroup.invalid) {
          return;
        }
        this.add();
  }
    

  add(){
    this.persona = this.formGroup.value;
    /* this.pago.codPago = this.formGroup.value.codPago;
    this.pago.tipoPago = this.formGroup.value.tipoPago;
    this.pago.fechaPago = this.formGroup.value.fechaPago;
    this.pago.valorPago = this.formGroup.value.valorPago;
    this.pago.valorIvaPago = this.formGroup.value.valorIvaPago;
    this.persona.pago = this.pago; */

    this.personaService.post(this.persona).subscribe(p => {
      if (p != null) {
        alert('persona creada');
        this.persona = p;
      }
    });
  }

  get control() { 
    return this.formGroup.controls;
  }
  


}
