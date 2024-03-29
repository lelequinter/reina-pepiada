import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('inicio => productos, productos => sobre, sobre => carrito, inicio => sobre, inicio => carrito, productos => carrito' , [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1s ease-out', style({ left: '-100%', opacity: 0 })),
      ]),
      query(':enter', [
        animate('1s ease-out', style({ left: '0%', opacity: 1 })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),

  transition('carrito => sobre, sobre => productos, productos => inicio, carrito => productos, carrito => inicio, sobre => inicio', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('1s ease-out', style({ left: '100%', opacity: 0 })),
      ]),
      query(':enter', [
        animate('1s ease-out', style({ left: '0%', opacity: 1 })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),

]);
