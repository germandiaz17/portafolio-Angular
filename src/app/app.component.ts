import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'germanSiteWeb';
  edad = '20';
  email = 'germanrodrigo.2003@hotmail.com';
  telefono = '3208715459';

  enviarMensajeWhatsapp() {
    const numeroWhatsApp = this.telefono;
    const url = 'https://wa.me/' + numeroWhatsApp;
    window.open(url, '_blank');
  }

  descargarCurriculum() {
    const nombreArchivo = 'GermanDiazCurriculum.pdf';
    const rutaArchivo = '../assets/' + nombreArchivo;
    const link = document.createElement('a');
    link.setAttribute('target', '_black');
    link.setAttribute('href', rutaArchivo);
    link.setAttribute('download', nombreArchivo);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
