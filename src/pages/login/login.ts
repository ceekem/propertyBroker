import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events ,MenuController,Platform } from 'ionic-angular';
import { UserManagerProvider } from '../../providers/user-manager/user-manager';
import { CommonProvider } from '../../providers/common/common';
import { ForgotpasswordPage } from "../forgotpassword/forgotpassword";
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private frmData:any;
  private result:any;
  public deviceToken:any;
  public pushNotice:any;
  private dresult:any;
  forgotpasswordPage:any;
  registerScreen:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ev:Events,
    private userManager:UserManagerProvider,
    private common:CommonProvider,
    public platform: Platform,
    private menu: MenuController
  ) {
    this.forgotpasswordPage ='ForgotpasswordPage';
    this.registerScreen = 'RegisterPage';
      this.deviceToken = '';


      this.menu.swipeEnable(false, 'menu1');
      this.frmData = {email:'demo@gmail.com',password:'123456',device_token:''}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

frmSubmit(){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var chk= re.test(String(this.frmData.email).toLowerCase());
    if(this.frmData.email=='' || this.frmData.password==''){
      this.common.showAlert('Both fields are required fields.');
    }
    else if(!chk){
      this.common.showToast('This is not a valid email');
     }
    else{
      this.common.showLoading();
      this.navCtrl.setRoot('HomePage');
      this.common.hideLoading();
    
    }

  }

  hintAlert(){
    this.common.showAlert('For demo purpose,<br/> Email: demo_agent@gmail.com <br/> Password: 123456');
  }

}
