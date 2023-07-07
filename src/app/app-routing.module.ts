import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'criar-sistema',
    pathMatch: 'full',
  },
  {
    path: 'criar-sistema',
    loadChildren: () =>
      import('./pages/criar-sistema/criar-sistema.module').then(
        (m) => m.CriarSistemaModule
      ),
  },
  {
    path: 'criar-ficha',
    loadChildren: () =>
      import('./pages/criar-ficha/criar-ficha.module').then(
        (m) => m.CriarFichaModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
