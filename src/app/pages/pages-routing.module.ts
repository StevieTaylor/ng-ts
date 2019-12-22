import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
const PAGESROUTE: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(PAGESROUTE)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
