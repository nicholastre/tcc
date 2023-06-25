import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponentModule } from 'src/app/shared/components/input-component/input-component.module';
import { CriarFichaComponent } from './criar-ficha.component';
import { CriarFichaRoutingModule } from './criar-ficha-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponentModule,
    CriarFichaRoutingModule
  ],
  declarations: [CriarFichaComponent]
})
export class CriarFichaModule { }
