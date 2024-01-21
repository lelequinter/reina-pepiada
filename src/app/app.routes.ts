import { Routes } from '@angular/router';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {
    path: 'inicio',
    component: InicioComponent,
    data: { animationState: 'inicio' }
  },
  {
    path: 'productos',
    component: ProductosComponent,
    data: { animationState: 'productos' }
  },
  {
    path: 'sobre-nosotros',
    component: SobreNosotrosComponent,
    data: { animationState: 'sobre' }
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    data: { animationState: 'carrito' }
  },
  {
    path: '**',
    redirectTo:'/inicio'
  },
];
