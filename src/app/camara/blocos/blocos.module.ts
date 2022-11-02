import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocosRoutingModule } from './blocos-routing.module';
import { BlocosComponent } from './blocos/blocos.component';
import { MaterialModule } from 'src/app/shared-module-material/material.module';

@NgModule({
  imports: [
    CommonModule,
    BlocosRoutingModule,
    MaterialModule
  ],
  declarations: [BlocosComponent]
})
export class BlocosModule { }
