import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsComponent } from './features/items/items.component';

const routes: Routes = [
  { path: '', redirectTo: 'items',  pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemsComponent },
  { path: 'items/:id/:direction', component: ItemsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
