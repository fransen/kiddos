import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { CustomReuseStrategy } from './routing/route-reuse-strategy';
import { ItemsComponent } from './features/items/items.component';

const routes: Routes = [
  { path: '', redirectTo: 'items',  pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemsComponent, data: { state: 'slideToLeft' } },
  { path: 'items/:id/:direction', component: ItemsComponent, data: { state: 'slideToLeft' } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
