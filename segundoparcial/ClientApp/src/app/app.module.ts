import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonaRegistroComponent } from './gastosDiarios/persona-registro/persona-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaConsultaComponent } from './gastosDiarios/persona-consulta/persona-consulta.component';
import { PagoRegistroComponent } from './gastosDiarios/pago-registro/pago-registro.component';
import { PagoConsultaComponent } from './gastosDiarios/pago-consulta/pago-consulta.component';
import { FooterComponent } from './gastosDiarios/footer/footer.component';
import { HeaderComponent } from './gastosDiarios/header/header.component';
import { PersonaService } from './services/persona.service';
import { FiltroPagoPipe } from './pipe/filtro-pago.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonaRegistroComponent,
    PersonaConsultaComponent,
    PagoRegistroComponent,
    PagoConsultaComponent,
    FooterComponent,
    HeaderComponent,
    FiltroPagoPipe,
    AlertModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    NgbModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
