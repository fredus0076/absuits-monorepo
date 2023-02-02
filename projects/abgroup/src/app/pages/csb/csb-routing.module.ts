import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsbComponent } from './csb/csb.component';

const routes: Routes = [
  {path: '', component: CsbComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsbRoutingModule { }
