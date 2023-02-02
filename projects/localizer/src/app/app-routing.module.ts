import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path": 'store-adaptor',
     loadChildren:()=>import('./pages/store-adaptor/store-adaptor.module').then(mod=>mod.StoreAdaptorModule),
  },
  {"path":"",redirectTo:"store-adaptor",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
