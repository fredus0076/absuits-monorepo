import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path":"localizer",
     loadChildren:()=>import('../../../localizer/src/app/pages/store-adaptor/store-adaptor.module').then(mod=>mod.StoreAdaptorModule),
  },
  {
    "path":"abgroup",
     loadChildren:()=>import('../../../abgroup/src/app/pages/csb/csb.module').then(mod=>mod.CsbModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
