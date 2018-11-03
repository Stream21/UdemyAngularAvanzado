import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '../../../../node_modules/@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor ( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
          this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }

    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(tema: string) {
      const url = `assets/css/colors/${tema}.css`;
      this.ajustes.tema = tema;
      this.ajustes.temaUrl = url;
      this._document.getElementById('tema').setAttribute('href', url);
      this.guardarAjustes();

  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
