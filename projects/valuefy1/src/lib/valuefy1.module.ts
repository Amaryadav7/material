import { NgModule } from '@angular/core';
import { Valuefy1Component } from './valuefy1.component';
import { SharedeventModule } from 'sharedevent';
@NgModule({
  declarations: [Valuefy1Component],
  imports: [SharedeventModule
  ],
  exports: [Valuefy1Component]
})
export class Valuefy1Module { }
