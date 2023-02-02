import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAdaptorRoutingModule } from './store-adaptor-routing.module';
import { StoreAdaptorComponent } from './store-adaptor.component';


@NgModule({
  declarations: [
    StoreAdaptorComponent
  ],
  imports: [
    CommonModule,
    StoreAdaptorRoutingModule
  ]
})
export class StoreAdaptorModule { }
