import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NbDialogService, NbToastrService} from "@nebular/theme";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../dataservice/apiservice.component";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../dataservice/utility.dataservice.component";
import {DomSanitizer} from "@angular/platform-browser";
import {Configuration} from "../dataservice/app.constant.component";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetToken;
  errMsg;
  successMsg;
  isShow;
  constructor(private _dataservice: ApiService, private _router: Router, private router: Router,
              private route: ActivatedRoute, private _configuration: Configuration ) {
    this.resetToken = this.route.snapshot.paramMap.get('reset_token');
  }

  loginForm = new FormGroup({
    'confirmpassword': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
  })

  ngOnInit() {
    this.checkResetToken(this.resetToken);
  }

  checkResetToken(resetToken){
    this.isShow = true;
    this._dataservice
        .checkResetToken<any>(this._configuration.CheckResetTokenApi, resetToken)
        .subscribe(resp => {
              if (resp.status === 'SUCCESS' && resp.is_valid === true) {
                this.isShow = false;
                return;
              }
            },
            error => {

            },
            () => {

            });

  }

  logIn() {
    if (this.loginForm.valid) {
        var password = this.loginForm.controls['password'].value;
        var confirmpassword = this.loginForm.controls['confirmpassword'].value;
        if(password === confirmpassword){
          let data = {
            reset_token: this.resetToken,
            new_password:password,
            new_password_confirmation:confirmpassword
          };
          this._dataservice
              .resetPassword<any>(this._configuration.ResetPasswordApi, data)
              .subscribe(resp => {
                    if (resp.status === this._configuration.ResponseStatusError) {
                      this.errMsg = resp.message;
                      return;
                    }
                    this.successMsg = resp.message;
                  },
                  error => {
                    this.errMsg = "Something went wrng, Please try again later!";
                  },
                  () => {
                  });

        } else {
          this.errMsg = "Confirm password does not match!";
        }
    } else {
      this.loginForm.controls.confirmpassword.markAsTouched();
      this.loginForm.controls.password.markAsTouched();
    }
  }

  showError(input: FormControl): string {
    if (input.errors.required) {
      return this._configuration.FieldRequired
    }
  }

}
