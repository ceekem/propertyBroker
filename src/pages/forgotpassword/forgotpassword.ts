import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  private frmData:any;
  private result:any;
  constructor(
     public navCtrl: NavController,
     private userManager:UserManagerProvider,
     private common:CommonProvider
   ) {
     this.frmData = {email:'',token:''}
  }

  ionViewDidLoad() {

  }
  goToRegister(){ 
    this.navCtrl.push('RegisterPage'); 
  }
  goToLogin(){  
    this.navCtrl.push('LoginPage');
  }
  frmSubmit(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var chk= re.test(String(this.frmData.email).toLowerCase());
    if(this.frmData.email==''){
      this.common.showToast('Email address is required field.');
    }
    else if(!chk){
      this.common.showToast('This is not a valid email');
    }
    else{
      this.common.showLoading();
     this.common.showAlert('Password has been sent to your mail'); 
     this.navCtrl.setRoot('LoginPage');
     this.common.hideLoading();
    }

  }


}
