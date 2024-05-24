import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarSobre: boolean = false;
  mostrarEndereco: boolean = false;

  toggleSobre() {
    this.mostrarSobre = !this.mostrarSobre;
    if (this.mostrarSobre) {
      this.mostrarEndereco = false;
    }
  }

  toggleEndereco() {
    this.mostrarEndereco = !this.mostrarEndereco;
    if (this.mostrarEndereco) {
      this.mostrarSobre = false;
    }
  }
}
