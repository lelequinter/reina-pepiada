import { Routes } from '@angular/router';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', redirectTo: '/inicio' },
];
