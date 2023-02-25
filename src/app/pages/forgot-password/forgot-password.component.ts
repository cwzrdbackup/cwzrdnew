import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ApiService} from "../dataservice/apiservice.component";
import {ActivatedRoute, Router} from "@angular/router";
import { Configuration } from '../dataservice/app.constant.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email;
  buttonTXt;
  errorMsg;
  successMsg
  forgotPassForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private _dataservice: ApiService, private _router: Router, private router: Router,
              private route: ActivatedRoute, private _configuration: Configuration) {
    this.buttonTXt = "Submit";
  }

  ngOnInit() {
  }

  forgotPassword() {

    if (this.forgotPassForm.valid) {
      this.buttonTXt = "Sending...";
      this.forgotPassForm.controls.email.markAsTouched();

      this.email = this.forgotPassForm.controls['email'].value;
      this._dataservice
          .forgotApis<any>(this._configuration.ForgotPasswordRequestApi, this.email)
          .subscribe(resp => {
                if (resp.status === this._configuration.ResponseStatusError) {
                  this.buttonTXt = "Submit";
                  this.errorMsg = "Your account does not exit in our database";
                  return;
                }
                this.buttonTXt = "Submit";
                this.successMsg = resp.message;
              },
              error => {
                this.buttonTXt = "Submit";
                this.errorMsg = "Please try again, something went wrong";
              },
              () => {

              });
    } else {
      this.forgotPassForm.controls.email.markAsTouched();
    }
  }

  showError(input: FormControl): string {
    if (input.errors.required) {
      return this._configuration.FieldRequired
    } else if (input.errors.email) {
      return "You need to enter a valid email address."
    }
  }

}
