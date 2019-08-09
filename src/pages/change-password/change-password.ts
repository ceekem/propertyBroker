import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  private frmData:any;
  private result:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private common:CommonProvider
  ) {
    this.frmData={old_password:"",new_password:"",confirm_new_password:""}
  }



  frmSubmit(){
    if(this.frmData.old_password=='' || this.frmData.new_password==''){
      this.common.showAlert('All fields are required fields.');
    }else{
      if (this.frmData.new_password != this.frmData.confirm_new_password){
        this.common.showToast('New password and confirm password should be same');
      }
      else{
        this.common.showLoading();
        this.common.showAlert('You password has been changed');
        this.frmData={old_password:"",new_password:"",confirm_new_password:""};
        this.common.hideLoading();
      }
    }

  }
  notification(){
      this.navCtrl.setRoot('NotificationPage');
  }
}
