import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';

const routes: Routes = [
  {
    path: 'firstmodule',
    loadChildren: FirstModule
  },
  {
    path: 'secondmodule',
    loadChildren: SecondModule
  }
];
export function FirstModule() {

  return FirstmoduleModule;
}
export function SecondModule() {

  return SecondmoduleModule;
}


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibRoutingModule { }
