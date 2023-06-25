import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelecionarSistemaComponent } from './selecionar-sistema.component'
import { SelecionarSistemaRoutingModule } from './selecionar-sistema-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelecionarSistemaRoutingModule,
  ],
  declarations: [SelecionarSistemaComponent],
})
export class SelecionarSistemaModule { }
