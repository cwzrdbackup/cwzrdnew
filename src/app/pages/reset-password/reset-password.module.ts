import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { Routes, RouterModule } from '@angular/router';
import { NbCardModule, NbButtonModule, NbInputModule, NbLayoutModule, NbSpinnerModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    {path: ':reset_token', component: ResetPasswordComponent}
]

@NgModule({
    declarations: [ResetPasswordComponent, ResetPasswordComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NbLayoutModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        ReactiveFormsModule,
        NbSpinnerModule
    ]
})
export class ResetPasswordModule { }
