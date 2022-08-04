import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Emp1Component } from './emp1/emp1.component';
import { EmpRoutingModule } from './emp-routing-module';



@NgModule({
  declarations: [
    Emp1Component
  ],
  imports: [
    CommonModule,
    EmpRoutingModule
  ]
})
export class EmpModule { }
