import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { CrownOutline, HomeOutline, HeartOutline, ShoppingCartOutline, ShopOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NzAffixModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly router = inject(Router);
  private readonly iconSvc = inject(NzIconService);

  icons: IconDefinition[] = [ CrownOutline, HomeOutline, HeartOutline, ShopOutline, ShoppingCartOutline ];

  constructor(){
    this.iconSvc.addIcon(...this.icons);
  }

}
