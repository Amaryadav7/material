import { NgModule } from '@angular/core';
import { ValuefyComponent } from './valuefy.component';
import { ComponentsComponent } from './components/components.component';
import { ButtonComponent } from './button/button.component';
import { LibRoutingModule } from './lib-routing.module';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';
import { SharedserviceModule } from 'sharedservice';
import { SharedeventModule } from 'sharedevent';
import { Valuefy1Module } from 'valuefy1';

@NgModule({
  declarations: [ValuefyComponent, ComponentsComponent, ButtonComponent],
  imports: [
    LibRoutingModule, FirstmoduleModule, SecondmoduleModule, SharedserviceModule, SharedeventModule, Valuefy1Module
  ],
  exports: [ValuefyComponent, ComponentsComponent, ButtonComponent]
})
export class ValuefyModule { }
