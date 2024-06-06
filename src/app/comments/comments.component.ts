import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>
      Comentarios de lo que sea
    </h3>
    <img src='https://statics.memondo.com/p/99/crs/2021/07/CR_1198029_f88782b3c1db411b98891492e6aee139_espalda_gamba.jpg?cb=5307313' />
    <p> BlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablabla</p>
    <img src='https://statics.memondo.com/p/99/crs/2021/07/CR_1198029_f88782b3c1db411b98891492e6aee139_espalda_gamba.jpg?cb=5307313' />
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }`
})
export class CommentsComponent {

}
