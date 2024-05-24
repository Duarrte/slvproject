// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './informacoes/sobre/sobre.component';
import { CepComponent } from './cep/cep.component'; // Importe o CepComponent corretamente
import { CepService } from './services/cep.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent, SobreComponent, CepComponent], // Remova o EnderecoComponent
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, // Adicione o FormsModule aos imports
  ],
  providers: [CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
