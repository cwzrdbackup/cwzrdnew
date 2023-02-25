import { NbToastrService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import {DataService} from  '../../dataservice/utility.dataservice.component';
import { Router,ActivatedRoute } from '@angular/router';
import {ApiService} from '../../dataservice/apiservice.component';
import {Configuration} from '../../dataservice/app.constant.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-refer-friend',
  templateUrl: './refer-friend.component.html',
  styleUrls: ['./refer-friend.component.scss']
})
export class ReferFriendComponent implements OnInit {

  constructor(private _dataservice : ApiService,private _router : Router,private router: Router,
    private route: ActivatedRoute,
    private _passingDataservice : DataService,private _configuration: Configuration, private toastrService: NbToastrService) { }

    alertModalMessage: string = '';
    public name:any;
    public email:any;
    public error:boolean;
    public sending:boolean=false;
    public invalid:boolean=false;
    public message:any;
    inviteForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required,Validators.email]),
      'message': new FormControl('', [Validators.required,Validators.maxLength(1000)]),
    })
  ngOnInit() {

  }
  inviteFriend=()=>{
   
    this.error = false;
    if (this.inviteForm.valid) {
      this.sending = true;

      let name=this.inviteForm.controls['name'].value;
      let email=this.inviteForm.controls['email'].value;
      let message=this.inviteForm.controls['message'].value;
      
      this._dataservice
      .postCall<any>(this._configuration.InviteFriendApi,{name:name, to:email, message:message})
      .subscribe(resp => {
        if(resp.status===this._configuration.ResponseStatusError)
        { this.sending=false;
          this.alertModalMessage = resp.message;
          $('#alertModal').modal('show');
          return;
        }
       
        this.sending=false;
        console.log(resp);
        this.alertModalMessage = resp.message;
        $('#alertModal').modal('show');
        //this._router.navigate(['/profile']);

      },
       error => {
         console.log(error);
         this.toastrService.show(this._configuration.ErrorFetchingResult, '',
         {
             status: this._configuration.ToasterStatusError,
             duration: this._configuration.ToasterDuration,
             position: this._configuration.ToasterPosition
         });
         this.sending=false;
       },
       () => {
        
     });

    }
  }

}
