
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarFichaComponent } from './criar-ficha.component';

const routes: Routes = [
  {
    path: '',
    component: CriarFichaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarFichaRoutingModule {}
