import { Configuration } from './../dataservice/app.constant.component';
import { Country, countryList } from './../../models/CountryList/country-list';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {ApiService} from '../dataservice/apiservice.component';

import {DataService} from '../dataservice/utility.dataservice.component';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { SignupChooseProfileImgComponent } from './signup-choose-profile-img/signup-choose-profile-img.component';

declare var $: any;


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required]),
    'confirmpassword': new FormControl('', [Validators.required]),
    'firstName': new FormControl('', [Validators.required]),
    'lastName': new FormControl('', [Validators.required]),
    'birthDay': new FormControl('', [Validators.required]),
    'country': new FormControl('', [Validators.required]),
    'licenseKey': new FormControl('', [Validators.required]),
    'username': new FormControl('', [Validators.required]),
    'gender': new FormControl('', [Validators.required]),

  })
  headerImg: string = '/assets/profile/HeaderDefault.png';
  profileImg: string = '/assets/profile/profile-img-1.png';

  public checked: boolean = false;

  alertModalMessage: string = '';
  agreePrivacyPolicy: boolean = false;
  public termsAndConditionChecked: boolean = false;
  countries: Country[] = countryList;
  signUpClicked = false;

  constructor(private dialog: NbDialogService, private _dataservice: ApiService, private _router: Router, private router: Router,
    private route: ActivatedRoute,
    private _passingDataservice: DataService,
    private toastrService: NbToastrService,
    private _configuration: Configuration) { }
    sending: boolean = false;
    errorMessage: any;
    success: boolean = false;

  ngOnInit() {
  }

  onAgreeChange($event) {
    this.agreePrivacyPolicy = $event.target.checked;
}

showPrivacyPolicy() {
    $('#privacyPolicyModal').modal('show');
}

async chooseProfileImg() {
  const dialog = this.dialog.open(SignupChooseProfileImgComponent, {
    context: {
      selected: this.profileImg
    }
  });
  const res = await dialog.onClose.toPromise();
  if (res) {
    this.profileImg = res;
  }
}
signup = () => {
  this.signUpClicked = true;
    if (true) {

    this.errorMessage = '';
    const email = this.signupForm.controls['email'].value;
    const password = this.signupForm.controls['password'].value;
    const confirmpassword = this.signupForm.controls['confirmpassword'].value;
    const firstName = this.signupForm.controls['firstName'].value;
    const lastName = this.signupForm.controls['lastName'].value;
    const birthDay = this.signupForm.controls['birthDay'].value;
    const country = this.signupForm.controls['country'].value.name;
    const licenseKey = this.signupForm.controls['licenseKey'].value;
    const username = this.signupForm.controls['username'].value;
    const Gender = this.signupForm.controls['gender'].value;
    if (password !== confirmpassword)
    {
      this.alertModalMessage = 'Please provide same passwords';
      $('#alertModal').modal('show');
      return;
    }
    if (this.signupForm.valid && password === confirmpassword)
    {
      this.sending = true;
      this._dataservice
      .postCall<any>(this._configuration.AuthSignupApi, {
        'email': email,
        'password': password,
        'firstName': firstName,
        'lastName': lastName,
        'country': country,
        'birthDay': birthDay,
        'licenseKey': licenseKey,
        'username': username,
        'profile_pic': this.profileImg
      })
      .subscribe(resp => {
        if (resp.status === this._configuration.ResponseStatusError)
        {
          this.sending = false;
          this.errorMessage = resp.message;
          return;
        }
        this.success = true;
        this.sending = false;
      },
      error => {
        console.log(error);
        this.toastrService.show(this._configuration.ErrorSignup, '',
        {
            status: this._configuration.ToasterStatusError,
            duration: this._configuration.ToasterDuration,
            position: this._configuration.ToasterPosition
        });
        this.sending = false;
      },
      () => {

    });
    }
  }

}

  hideModal(): void {
      document.getElementById('close-modal').click();
  }

  hideModalAgree(): void {
      this.agreePrivacyPolicy = true;
      document.getElementById('close-modal').click();
  }

    login = () => {
        this.router.navigateByUrl('/login').then();
    };

    validateInput(input: FormControl): boolean {
        return input.touched && input.invalid;
    }

    showError(input: FormControl): string {
        if (input.errors.required) {
            return this._configuration.FieldRequired;
        } else if (input.errors.email) {
            return 'You need to enter valid email.';
        }
    }

  toggle(event: any) {
    this.termsAndConditionChecked = event.target.checked;
  }
}
