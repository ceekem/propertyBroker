import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';
import { CommonProvider } from '../../providers/common/common';
import { Storage } from '@ionic/storage';
import { RegisterProfileimgPage } from '../register-profileimg/register-profileimg';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private frmData:any;
  private result:any;
  public commFields:any;
  public frmVArray:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage,
    private userManager:UserManagerProvider,
    private common:CommonProvider
  ) {
      this.frmVArray= ['','','','','','','',''];
      this.frmData = {
        fullname:"",
        username:"",
        brokerage:"",
        agency:"",
        brokerrage_address:'',
        license:'',
        phone_number:"",email:"",password:"",confirm_password:"",device_token:''};
      this.commFields = {brokeragerange:[],agencies:[]}

      this.storage.get("device_token").then((data)=>{
            if(data!=null && data!=''){
                this.frmData.device_token = data;
            }
      });

  }
  goToLogin(){  
    this.navCtrl.push('LoginPage');
  }
  goToForgot(){  
    this.navCtrl.push('ForgotpasswordPage'); 
  }


  frmSubmit(){
      //console.log(this.frmData);
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var chk= re.test(String(this.frmData.email).toLowerCase());

      this.frmVArray= ['','','','','','','',''];
      let isValid = true;
      if(this.frmData.fullname=='') this.frmVArray[0] = 'ngR';
      if(this.frmData.email=='') this.frmVArray[1] = 'ngR';
      if(this.frmData.phone_number=='') this.frmVArray[2] = 'ngR';
      if(this.frmData.brokerrage_address=='') this.frmVArray[3] = 'ngR';
      if(this.frmData.license=='') this.frmVArray[4] = 'ngR';
      if(this.frmData.password=='') this.frmVArray[5] = 'ngR';
      if(this.frmData.confirm_password=='') this.frmVArray[6] = 'ngR';

      for(var i=0; i<this.frmVArray.length; i++){
          if(this.frmVArray[i]!='') isValid = false;
      }

      if(this.frmData.fullname=='' || this.frmData.email=='' || this.frmData.password=='' || this.frmData.phone_number=='' || this.frmData.brokerrage_address==''){
        this.common.showToast('Please fill all required field');
      }
      else if(!chk){
        this.common.showToast('This is not a valid email');
      }
      else if(this.frmData.password !== this.frmData.confirm_password){
        this.common.showToast('Password and confirm password should be same');
       }
       else {
        this.common.showLoading();
        this.common.showAlert('Successful Registered');
        this.navCtrl.setRoot('LoginPage');
        this.common.hideLoading();
       }
  }

}
