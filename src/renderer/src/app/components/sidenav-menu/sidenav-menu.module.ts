import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation.component';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [NavigationComponent]
})
export class SidenavMenuModule { }
