import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarSistemaComponent } from './criar-sistema.component'
import { CriarSistemaRoutingModule } from './criar-sistema-routing.module';
import { InputComponentModule } from 'src/app/shared/components/input-component/input-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CriarSistemaRoutingModule,
    InputComponentModule
  ],
  declarations: [CriarSistemaComponent]
})
export class CriarSistemaModule { }
