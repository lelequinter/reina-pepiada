import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuDirective, NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { CrownOutline, HomeOutline, HeartOutline, ShoppingCartOutline, ShopOutline, MenuOutline } from '@ant-design/icons-angular/icons';
import { routeTransitionAnimations } from './route-transition-animations';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
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
    NzDropDownModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  public readonly router = inject(Router);
  private readonly iconSvc = inject(NzIconService);

  icons: IconDefinition[] = [ CrownOutline, HomeOutline, HeartOutline, ShopOutline, ShoppingCartOutline, MenuOutline ];

  constructor(){
    this.iconSvc.addIcon(...this.icons);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

}
