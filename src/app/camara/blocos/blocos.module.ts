import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocosRoutingModule } from './blocos-routing.module';
import { BlocosComponent } from './blocos/blocos.component';

@NgModule({
  imports: [
    CommonModule,
    BlocosRoutingModule
  ],
  declarations: [BlocosComponent]
})
export class BlocosModule { }
