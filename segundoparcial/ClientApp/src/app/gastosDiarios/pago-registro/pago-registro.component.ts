import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { PagoService } from 'src/app/services/pago.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Pago } from '../models/pago';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-pago-registro',
  templateUrl: './pago-registro.component.html',
  styleUrls: ['./pago-registro.component.css']
})
export class PagoRegistroComponent implements OnInit {
  identificacion: string;
  formGroup: FormGroup;
  persona: Persona;
  pago: Pago;

  constructor(private pagoService: PagoService,private personaService:PersonaService, 
    private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.pago = new Pago();
    this.persona = new Persona();
    this.identificacion = '';
    this.persona.nombre = '';
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
  Buscar(){
    this.personaService.buscar(this.identificacion).subscribe(
      r => {
        if (r != null) {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona existe!!! :-)';
          this.persona=r;
        }else{
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Persona no existe!!! :-)';
        }
   
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
