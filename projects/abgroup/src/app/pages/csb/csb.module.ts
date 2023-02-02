import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsbRoutingModule } from './csb-routing.module';
import { CsbComponent } from './csb/csb.component';


@NgModule({
  declarations: [
    CsbComponent
  ],
  imports: [
    CommonModule,
    CsbRoutingModule
  ]
})
export class CsbModule { }
