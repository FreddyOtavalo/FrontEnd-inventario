import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';

import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
 {path: 'core', component: CoreComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
