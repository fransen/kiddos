import { trigger, state, animate, style, transition } from '@angular/animations';

export const slideToLeft =
  trigger('slideToLeft', [
    state('void', style({ position: 'fixed', width: '100%' })),
    state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ transform: 'translateX(100%)' }),
      animate('0.1s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({ transform: 'translateX(0%)' }),
      animate('0.1s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);
