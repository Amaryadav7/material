import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ValuefyModule } from 'valuefy';
const routes: Routes = [
  {
    path: '',
    loadChildren: './LibModule.module#LibModule'
  }
];
// export function valuefy() {

//   return ValuefyModule;
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
