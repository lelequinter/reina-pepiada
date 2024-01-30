import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from "ng-zorro-antd/card";
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    NzCardModule,
    NzCarouselModule,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  array = [1, 2, 3, 4];
}
