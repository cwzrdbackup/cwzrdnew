import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { battleOfWzrdsComponent } from './battleOfWzrds.component';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { bowHeaderModule } from '../bowheader/header.module';
import { HeaderModule } from '../header/header.module';

const routes: Routes = [
  {path: '', component: battleOfWzrdsComponent}
]

@NgModule({
  declarations: [battleOfWzrdsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
  bowHeaderModule,
  HeaderModule
  ]
})
export class battleOfWzrdsModule { }
