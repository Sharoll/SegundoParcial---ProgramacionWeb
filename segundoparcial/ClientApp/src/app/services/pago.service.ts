import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Pago } from '../gastosDiarios/models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  baseUrl: string;

  constructor( private http: HttpClient,
    @Inject('BASE_URL') baseUrl:string,
    private handleErrorService: HandleHttpErrorService) { this.baseUrl = baseUrl; }

    get(): Observable<Pago[]>{
      return this.http.get<Pago[]>(this.baseUrl + 'api/Pago')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Pago[]>('Consulta Pago', null))
        );
    }

    post(persona:Pago): Observable<Pago> {
      return this.http.post<Pago>(this.baseUrl + 'api/Pago', persona)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
       catchError(this.handleErrorService.handleError<Pago>('Registrar Pago', null))
      );
    }
}
