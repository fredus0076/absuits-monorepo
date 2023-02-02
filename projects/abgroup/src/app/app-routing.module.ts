import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    "path": 'csb',
     loadChildren:()=>import('./pages/csb/csb.module').then(mod=>mod.CsbModule),
  },
  {"path":"",redirectTo:"csb",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
