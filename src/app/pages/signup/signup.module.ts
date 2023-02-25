import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbLayoutModule, NbSpinnerModule,NbDatepickerModule, NbDialogModule, NbCheckboxModule } from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { SignupChooseProfileImgComponent } from './signup-choose-profile-img/signup-choose-profile-img.component';


const routes: Routes = [
  {path: '', component: SignupComponent}
]

@NgModule({
  declarations: [SignupComponent, SignupChooseProfileImgComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule, NbDialogModule.forChild(),
    NbCheckboxModule,
    NbInputModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbDatepickerModule,
    NbSelectModule  ],
    entryComponents: [ SignupChooseProfileImgComponent]

})
export class SignupModule { }
