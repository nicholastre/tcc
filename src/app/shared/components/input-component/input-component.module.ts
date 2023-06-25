import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponentComponent } from './input-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [InputComponentComponent],
  exports: [InputComponentComponent]
})
export class InputComponentModule { }
