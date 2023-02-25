import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ForgotPasswordComponent} from "./forgot-password.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbSpinnerModule} from "@nebular/theme";
const routes: Routes = [
  {path: '', component: ForgotPasswordComponent}
]
@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbSpinnerModule
  ]
})

export class ForgotPasswordModule { }
