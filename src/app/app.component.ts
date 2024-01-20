import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { CrownOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ CrownOutline ];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NzAffixModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly iconSvc = inject(NzIconService);

  constructor(){
    this.iconSvc.addIcon(CrownOutline);
  }

}
