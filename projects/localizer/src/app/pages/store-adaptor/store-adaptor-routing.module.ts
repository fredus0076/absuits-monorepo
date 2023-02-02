import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreAdaptorComponent } from './store-adaptor.component';

const routes: Routes = [
  {path: '', component: StoreAdaptorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAdaptorRoutingModule { }
