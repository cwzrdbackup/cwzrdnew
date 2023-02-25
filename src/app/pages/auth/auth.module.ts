import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { NbCardModule, NbButtonModule, NbInputModule, NbLayoutModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { WindowService } from 'src/app/window.service';

const routes: Routes = [
    {path: '', component: AuthComponent}
]

@NgModule({
  declarations: [AuthComponent, AuthComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    DeviceDetectorModule.forRoot(),
  ], 
  providers: [WindowService],
})
export class AuthModule { }
