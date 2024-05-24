// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './informacoes/sobre/sobre.component';
import { CepComponent } from './cep/cep.component'; // Corrigido o nome do componente para CepComponent

const routes: Routes = [
  { path: 'cep', component: CepComponent }, // Corrigido o nome do componente para CepComponent
  { path: '', redirectTo: '/sobre', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
