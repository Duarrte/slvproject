import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent {
  endereco: any = {};
  mostrarInput: boolean = false;

  constructor(private cepService: CepService) {}

  toggleEndereco() {
    console.log('Toggle Endereço!'); // Verifica se o método está sendo chamado
    this.mostrarInput = true;
  }

  buscarEndereco(cep: string) {
    this.cepService.getAddressByCep(cep).subscribe(
      (data: any) => {
        this.endereco = data;
      },
      (error) => {
        console.log('Erro ao buscar endereço:', error);
      }
    );
  }
}
